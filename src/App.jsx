import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
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
import MobileNavbar from "./Components/UserLogin/MobileNavbar";
import ProgressCardKelasComponent from "./Components/ProgressCardKelasComponent";
import EditProfileComponent from "./Components/UserLogin/EditProfileComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* The page for not found url path */}
          <Route path="*" element={<h1 className="d-flex flex-row justify-content-center align-items-center vh-100">404 Page Not Found</h1>} />
          <Route path="adminkelolakelas" element={<KelolaKelasPage />} />
          <Route path="admindashboard" element={<AdminDashboardPage />} />
          <Route path="register" element={<Register />} />
          <Route path="kelassaya" element={<BerandaKelasSayaPage />} />
          <Route path="topikkelas" element={<BerandaTopikKelasPage />} />
          <Route path="beranda" element={<Beranda />} />
          <Route path="card" element={<CardKelasComponent />} />
          <Route path="notifikasi" element={<NotifikasiPage />} />
          <Route path="akun" element={<AkunPage />} />
          <Route path="pembayaran" element={<PembayaranPage />} />
          <Route path="pembayarandone" element={<PembayaranDonePage />} />
          <Route path="mobilenavbar" element={<MobileNavbar />} />
          <Route path="progresscard" element={<ProgressCardKelasComponent />} />
          <Route path="editprofile" element={<EditProfileComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
