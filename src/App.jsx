import { BrowserRouter, Routes, Route } from "react-router-dom";
import KelolaKelasPage from "./Pages/Admin/KelolaKelasPage";
import AdminDashboardPage from "./Pages/Admin/AdminDashboardPage";
import Register from "./Pages/Register/Register";
import BerandaKelasSayaPage from "./Pages/UserLogin/BerandaKelasSayaPage";
import BerandaTopikKelasPage from "./Pages/BerandaTopikKelasPage";
import Beranda from "./Pages/UserLogin/Beranda";
import CardKelasComponent from "./Components/CardKelasComponent";
import NotifikasiPage from "./Pages/UserLogin/NotifikasiPage";
import AkunPage from "./Pages/UserLogin/AkunPage";
import PembayaranPage from "./Pages/UserLogin/PembayaranPage";
import PembayaranDonePage from "./Pages/UserLogin/PembayaranDonePage";
import DetailKelas from "./Pages/UserLogin/DetailKelas";
import MobileNavbar from "./Components/UserLogin/MobileNavbar";
import ProgressCardKelasComponent from "./Components/ProgressCardKelasComponent";
import EditProfileComponent from "./Components/UserLogin/EditProfileComponent";
import LoginPage from "./Pages/Login/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import BeliMateriPremium from "./Components/Popup/BeliMateriPremium";
import MulaiBelajar from "./Components/Popup/MulaiBelajar";
import ResetPassword from "./Pages/Reset/ResetPassword";
import NavbarBlankComponent from "./Components/UserLogin/NavbarBlankComponent";
// import Protected from "./Components/Protected/Protected";

// import NoAccessToken from "./Components/Protected/NoAccessToken";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                // <Protected>
                <Beranda />
                // </Protected>
              }
            />

            {/* The page for not found url path */}
            <Route
              path="*"
              element={
                <h1 className="d-flex flex-row justify-content-center align-items-center vh-100">
                  404 Page Not Found
                </h1>
              }
            />
            <Route path="adminkelolakelas" element={<KelolaKelasPage />} />
            <Route path="admindashboard" element={<AdminDashboardPage />} />
            <Route path="kelassaya" element={<BerandaKelasSayaPage />} />
            <Route path="topikkelas" element={<BerandaTopikKelasPage />} />
            <Route path="detailkelas" element={<DetailKelas />} />
            <Route path="/detail/:courseID" element={<DetailKelas />} />
            <Route path="card" element={<CardKelasComponent />} />
            <Route path="notifikasi" element={<NotifikasiPage />} />
            <Route path="akun" element={<AkunPage />} />
            <Route path="pembayaran" element={<PembayaranPage />} />
            <Route path="pembayarandone" element={<PembayaranDonePage />} />
            <Route path="mobilenavbar" element={<MobileNavbar />} />
            <Route path="mulaibelajar" element={<MulaiBelajar />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route
              path="progresscard"
              element={<ProgressCardKelasComponent />}
            />
            <Route path="navblank" element={<NavbarBlankComponent />} />
            <Route
              path="progresscard"
              element={<ProgressCardKelasComponent />}
            />

            <Route path="editprofile" element={<EditProfileComponent />} />
            <Route
              path="/login"
              element={
                // <NoAccessToken>
                <LoginPage />
                // </NoAccessToken>
              }
            />

            <Route
              path="/register"
              element={
                // <NoAccessToken>
                <Register />
                // </NoAccessToken>
              }
            />

            <Route path="belimateripremium" element={<BeliMateriPremium />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
