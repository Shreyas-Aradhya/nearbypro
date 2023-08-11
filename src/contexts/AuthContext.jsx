import { createContext, useEffect, useReducer } from "react";

import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/auth";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  vendor: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user, vendor } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
      vendor,
    };
  },
  LOGIN: (state, action) => {
    const { user, vendor } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      isInitialized: true,
      user,
      vendor,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    vendor: null,
  }),
  UPDATE_PROFILE: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      user,
    };
  },
  UPDATE_VENDOR: (state, action) => {
    const { vendor } = action.payload;
    return {
      ...state,
      vendor,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          const response = await axios.get(`/users/getProfile`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const { user, vendor } = response.data;
          setSession(accessToken);

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
              vendor,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
              vendor: null,
            },
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
            vendor: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const requestOtp = async (mobilenumber) => {
    try {
      let data = JSON.stringify({
        mobilenumber: mobilenumber,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/users/sendOtp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { message, otp } = response.data;
      console.log(message);
      return otp;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const verifyOtp = async (otp, mobilenumber) => {
    try {
      let data = JSON.stringify({
        otp: otp,
        mobilenumber: mobilenumber,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/users/verifyOtp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios.request(config);
      const { message, access_token, user, vendor } = response.data;
      console.log(message);
      setSession(access_token);
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,
          user,
          vendor,
        },
      });
    } catch (error) {
      dispatch({
        type: "INITIALIZE",
        payload: {
          isAuthenticated: false,
          user: null,
          vendor: null,
        },
      });
      throw new Error(error.message);
    }
  };

  const logout = () => {
    setSession(null);
    dispatch({
      type: "LOGOUT",
    });
  };

  const updateProfile = async (profileData) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken && isValidToken(accessToken)) {
        let data = JSON.stringify(profileData);

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "/users/register",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        const response = await axios.request(config);
        const { user } = response.data;
        dispatch({
          type: "UPDATE_PROFILE",
          payload: {
            user,
          },
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateBusiness = async (businessData) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken && isValidToken(accessToken)) {
        let data = JSON.stringify(businessData);

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "/vendor/register",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        const response = await axios.request(config);
        const { vendor } = response.data;

        dispatch({
          type: "UPDATE_VENDOR",
          payload: {
            vendor,
          },
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        requestOtp,
        verifyOtp,
        logout,
        updateProfile,
        updateBusiness,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
