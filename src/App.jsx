import Footer from "./layout/footer/Footer";
import Homepage from "./pages/Home/Homepage";
import CategoryPage from "./pages/Home/CategoryPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthGuard from "./gaurds/AuthGuard";
import GuestGuard from "./gaurds/GuestGuard";
import RegisterGaurd from "./gaurds/RegisterGaurd";

import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { SnackbarProvider } from "notistack";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileGaurd from "./gaurds/ProfileGaurd";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <SnackbarProvider autoHideDuration={3000}>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category">
            <Route path=":name" element={<CategoryPage />} />
          </Route>
          <Route
            path="/signin"
            element={
              <GuestGuard>
                <SigninPage />
              </GuestGuard>
            }
          />
          <Route
            path="/register"
            element={
              <RegisterGaurd>
                <RegisterPage />
              </RegisterGaurd>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <ProfileGaurd>
                  <ProfilePage isEdit={true} />
                </ProfileGaurd>
              </AuthGuard>
            }
          ></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </SnackbarProvider>
  );
}

export default App;
