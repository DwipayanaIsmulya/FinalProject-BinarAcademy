import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import KelolaKelasPage from "./Pages/Admin/KelolaKelasPage";
import AdminDashboardPage from "./Pages/Admin/AdminDashboardPage";
import Register from "./Pages/Register/Register";
import BerandaKelasSayaPage from "./Pages/UserLogin/BerandaKelasSayaPage";
import BerandaTopikKelasPage from "./Pages/BerandaTopikKelasPage";
import Beranda from "./Pages/UserLogin/Beranda";
import NotifikasiPage from "./Pages/UserLogin/NotifikasiPage";
import AkunPage from "./Pages/UserLogin/AkunPage";
import PembayaranPage from "./Pages/UserLogin/PembayaranPage";
import PembayaranDonePage from "./Pages/UserLogin/PembayaranDonePage";
import DetailKelas from "./Pages/UserLogin/DetailKelas";
import EditProfileComponent from "./Components/UserLogin/EditProfileComponent";
import LoginPage from "./Pages/Login/LoginPage";
import store from "./redux/store";
import BeliMateriPremium from "./Components/Popup/BeliMateriPremium";
import MulaiBelajar from "./Components/Popup/MulaiBelajar";
import ResetPassword from "./Pages/Reset/ResetPassword";
import SearchCourse from "./Pages/UserLogin/SearchCourse";
import Protected from "./Components/Protected/Protected";
import NoAccessToken from "./Components/Protected/NoAccessToken";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Toaster position="top-right" reverseOrder={false} />
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Beranda />
                </Protected>
              }
            />

            {/* The page for not found url path */}
            <Route path="*" element={<h1 className="d-flex flex-row justify-content-center align-items-center vh-100">404 Page Not Found</h1>} />
            <Route
              path="adminkelolakelas"
              element={
                <Protected>
                  <KelolaKelasPage />
                </Protected>
              }
            />
            <Route
              path="admindashboard"
              element={
                <Protected>
                  <AdminDashboardPage />
                </Protected>
              }
            />
            <Route
              path="kelassaya"
              element={
                <Protected>
                  <BerandaKelasSayaPage />
                </Protected>
              }
            />
            <Route
              path="topikkelas"
              element={
                <Protected>
                  <BerandaTopikKelasPage />
                </Protected>
              }
            />
            <Route
              path="/detail/:courseId"
              element={
                <Protected>
                  <DetailKelas />
                </Protected>
              }
            />
            <Route
              path="notifikasi"
              element={
                <Protected>
                  <NotifikasiPage />
                </Protected>
              }
            />
            <Route
              path="akun"
              element={
                <Protected>
                  <AkunPage />
                </Protected>
              }
            />
            <Route
              path="pembayaran"
              element={
                <Protected>
                  <PembayaranPage />
                </Protected>
              }
            />
            <Route
              path="pembayarandone"
              element={
                <Protected>
                  <PembayaranDonePage />
                </Protected>
              }
            />
            <Route
              path="mulaibelajar"
              element={
                <Protected>
                  <MulaiBelajar />
                </Protected>
              }
            />
            <Route
              path="resetpassword"
              element={
                <Protected>
                  <ResetPassword />
                </Protected>
              }
            />
            <Route
              path="search"
              element={
                <Protected>
                  <SearchCourse />
                </Protected>
              }
            />

            <Route
              path="editprofile"
              element={
                <Protected>
                  <EditProfileComponent />
                </Protected>
              }
            />
            <Route
              path="belimateripremium"
              element={
                <Protected>
                  <BeliMateriPremium />
                </Protected>
              }
            />
            <Route
              path="login"
              element={
                <NoAccessToken>
                  <LoginPage />
                </NoAccessToken>
              }
            />
            <Route
              path="register"
              element={
                <NoAccessToken>
                  <Register />
                </NoAccessToken>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
