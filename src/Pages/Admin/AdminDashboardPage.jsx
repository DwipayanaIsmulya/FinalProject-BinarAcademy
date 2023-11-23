import activeImage from "../../assets/img/icon.png";
import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen w-full">
        {/* Ini Sidebar */}
        <div className="bg-[#6148FF] flex-initial w-[400px]">
          <div className="flex flex-col text-white">
            <div className="text-4xl text-center p-16">Belajar</div>
            <button className="text-start font-bold py-5 pl-6 mt-2 bg-[#489CFF] ">Dashboard</button>
            <button onClick={() => navigate("/adminkelolakelas")} className="text-start font-bold py-5 pl-6 mt-2 hover:bg-[#489CFF] duration-500">
              Kelola Kelas
            </button>
            <button className="text-start font-bold py-5 pl-6 mt-2 hover:bg-[#489CFF] duration-500">Keluar</button>
          </div>
        </div>
        {/* Content */}
        <div className="flex-initial w-full">
          {/* Nav */}
          <div className="bg-[#EBF3FC] py-6 grid grid-cols-2 ">
            <div className="py-4 pl-16 text-2xl font-bold text-[#6148FF]">Hi, Admin!</div>
            <div className="text-end my-auto px-16">
              <input type="text" className="p-3 my-3 w-[200px] rounded-xl text-black md:mx-2 sm:mx-2" placeholder="Cari.." />
            </div>
          </div>
          {/* 3 Box Counter */}
          <div className="flex justify-around">
            <div className="grid grid-cols-3 py-6 text-white">
              <div className="grid grid-cols-2 bg-[#489CFF] rounded-2xl py-5 text-center lg:px-[50px] lg:mx-4 ">
                <div className="mx-auto py-4">
                  {" "}
                  <img src={activeImage} alt="" />
                </div>
                <div className="flex flex-col my-auto">
                  <div className="text-start text-2xl">450</div>
                  <div className="text-start text-xl">Active Users</div>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-[#73CA5C] rounded-2xl py-5 text-center lg:px-[50px] lg:mx-4 ">
                <div className="mx-auto py-4">
                  {" "}
                  <img src={activeImage} alt="" />
                </div>
                <div className="flex flex-col my-auto">
                  <div className="text-start text-2xl">450</div>
                  <div className="text-start text-xl ">Active Users</div>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-[#6148FF] rounded-2xl py-5 text-center lg:px-[50px] lg:mx-4 ">
                <div className="mx-auto py-4">
                  {" "}
                  <img src={activeImage} alt="" />
                </div>
                <div className="flex flex-col my-auto">
                  <div className="text-start text-2xl">450</div>
                  <div className="text-start text-xl">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-16">
            <div className="grid grid-cols-2 ">
              <div className="text-3xl font-bold">Status Pembayaran</div>
              <div className="flex justify-end">
                <button className=" bg-[#6148FF] text-white rounded-2xl px-5 mx-2 border-2 border-black hover:bg-white hover:text-[#6148FF] duration-150">Tambah</button>
                <button className=" bg-[#6148FF] text-white rounded-2xl px-5 mx-2 border-2 border-black hover:bg-white hover:text-[#6148FF] duration-150">Filter</button>
              </div>
            </div>
            <div className="pt-4">
              <table className="w-full">
                <thead className="bg-[#EBF3FC]">
                  <tr>
                    <th>ID</th>
                    <th>Kategori</th>
                    <th>Kelas Premium</th>
                    <th>Status</th>
                    <th>Metode Pembayaran</th>
                    <th>Tanggal Bayar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">johndoe123</td>
                    <td className="text-center">UI/UX Design</td>
                    <td className="text-center"> Belajar Web Designer dengan Figma</td>
                    <td className="text-center">Sudah Bayar</td>
                    <td className="text-center">Credit Card</td>
                    <td className="text-center">21 Sep, 2023 at 2:00 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
