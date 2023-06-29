import Navbar from "./layout/nav/Navbar";
import Footer from "./layout/footer/Footer";
import Homepage from "./pages/Home/Homepage";
import SigninPage from "./pages/SigninPage/SigninPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthGuard from "./gaurds/AuthGuard";
import GuestGuard from "./gaurds/GuestGuard";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
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
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuard>
              <RegisterPage isEdit={true} />
            </AuthGuard>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
