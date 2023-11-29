import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import KelolaKelasPage from "./Pages/Admin/KelolaKelasPage";
import AdminDashboardPage from "./Pages/Admin/AdminDashboardPage";
import Register from "./Pages/Register/Register";
import BerandaKelasSayaPage from "./Pages/UserLogin/BerandaKelasSayaPage";
import BerandaTopikKelasPage from "./Pages/BerandaTopikKelasPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

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
          <Route path="register" element={<Register />} />
          <Route path="kelassaya" element={<BerandaKelasSayaPage />} />
          <Route path="topikkelas" element={<BerandaTopikKelasPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
