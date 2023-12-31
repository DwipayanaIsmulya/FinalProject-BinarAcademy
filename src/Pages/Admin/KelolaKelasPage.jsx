import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import activeImage from "../../assets/img/icon.png";
import axios from "axios";

const KelolaKelasPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [courseItem, setCourseItem] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    courseCode: "",
    isPremium: null,
    categoryId: "",
    level: "",
    price: 0,
    description: "",
    videoUrl: "",
    userId: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://fpbejs-production.up.railway.app/api/v1/course", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJNdWx5YTI2QHlhaG9vLmNvbSIsImlhdCI6MTcwMjIzMDQ5OX0.Firorna3YFlxqNSaquzk5qlM8Hp7GHLoHgAbQUJT7AY",
          },
        });

        const { data } = response.data;
        setCourseItem(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti API Create Course disini
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className="flex h-screen w-full">
        {/* Ini Sidebar */}
        <div className="bg-[#6148FF] flex-initial w-[400px]">
          <div className="flex flex-col text-white">
            <div className="text-4xl text-center p-16">Belajar</div>
            <button onClick={() => navigate("/admindashboard")} className="text-start font-bold py-5 pl-6 mt-2 hover:bg-[#489CFF] duration-500">
              Dashboard
            </button>
            <button className="text-start font-bold py-5 pl-6 mt-2 bg-[#489CFF]"> Kelola Kelas</button>
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
              <div className="text-3xl font-bold">Kelola Kelas</div>
              <div className="flex justify-end">
                <button onClick={() => setShowModal(true)} className=" bg-[#6148FF] text-white rounded-2xl px-5 mx-2 border-2 border-black hover:bg-white hover:text-[#6148FF] duration-150">
                  Tambah
                </button>
                <button className=" bg-[#6148FF] text-white rounded-2xl px-5 mx-2 border-2 border-black hover:bg-white hover:text-[#6148FF] duration-150">Filter</button>
              </div>
            </div>
            <div className="pt-4">
              <table className="w-full">
                <thead className="bg-[#EBF3FC]">
                  <tr>
                    <th>No</th>
                    <th>Kode Kelas</th>
                    <th>Kategori</th>
                    <th>Nama Kelas</th>
                    <th>Tipe Kelas</th>
                    <th>Level</th>
                    <th>Harga Kelas</th>
                    <th>Mentor</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {courseItem.map((course) => (
                    <tr key={course?.id}>
                      <td className="text-center">{course.id}</td>
                      <td className="text-center">{course.courseCode}</td>
                      <td className="text-center">{course.category}</td>
                      <td className="text-center">{course.name}</td>
                      <td className="text-center">{course.isPremium ? "Premium" : "Gratis"}</td>
                      <td className="text-center">{course.level}</td>
                      <td className="text-center">Rp {course.price}</td>
                      <td className="text-center">{course.mentor}</td>
                      <div className="grid grid-cols-2">
                        <button>Ubah</button>
                        <button>Hapus</button>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Tambah Kelas Modal */}
        {showModal ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-sm">
                <div className="relative w-[1000px] my-6 mx-auto max-w-4xl max-h-4xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold text-[#6148FF] ">Tambah Data</h3>
                      <button className="p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="flex flex-col p-2">
                        {/* Input Nama Kelas */}
                        <div className="flex flex-col p-2">
                          <label className="text-sm pb-2 font-medium">Nama Kelas:</label>
                          <input className=" border-2 border-gray-400 p-2 rounded-xl  " type="text" name="name" placeholder="Text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        {/* Input Kategori */}
                        <div className="flex flex-col p-2">
                          <p className="text-sm pb-2 font-medium">Kategori: </p>

                          <div className="flex justify-around">
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="1" name="categoryId" onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })} />
                                UI/UX Design
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="2" name="categoryId" onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })} />
                                Web Development
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="3" name="categoryId" onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })} />
                                Android Development
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="4" name="categoryId" onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })} />
                                Data Science
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="5" name="categoryId" onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })} />
                                Business Intelligence
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Input Kode Kelas */}
                        <div className="flex flex-col p-2">
                          <label className="text-sm pb-2 font-medium">Kode Kelas:</label>
                          <input
                            className=" border-2 border-gray-400 p-2 rounded-xl  "
                            type="text"
                            name="courseCode"
                            placeholder="Text"
                            value={formData.courseCode}
                            onChange={(e) => setFormData({ ...formData, courseCode: e.target.value })}
                          />
                        </div>
                        {/* Input Tipe Kelas */}
                        <div className="flex flex-col p-2">
                          <p className="text-sm pb-2 font-medium">Tipe Kelas:</p>
                          <div className="flex">
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="true" name="isPremium" onChange={() => setFormData({ ...formData, isPremium: true })} />
                                Premium
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="false" name="isPremium" onChange={() => setFormData({ ...formData, isPremium: false })} />
                                Gratis
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Input Level */}
                        <div className="flex flex-col p-2">
                          <p className="text-sm pb-2 font-medium">Level:</p>
                          <div className="flex">
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="Beginner" name="Level" onChange={(e) => setFormData({ ...formData, level: e.target.value })} />
                                Beginner
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="Intermediate" name="Level" onChange={(e) => setFormData({ ...formData, level: e.target.value })} />
                                Intermediate
                              </label>
                            </div>
                            <div className="flex items-center pr-2">
                              <label className="text-sm pl-1">
                                <input className="mx-2" type="radio" value="Advance" name="Level" onChange={(e) => setFormData({ ...formData, level: e.target.value })} />
                                Advance
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Input Harga */}
                        <div className="flex flex-col p-2">
                          <label className="text-sm pb-2 font-medium">Harga:</label>
                          <input
                            className=" border-2 border-gray-400 p-2 rounded-xl  "
                            type="text"
                            name="price"
                            placeholder="Text"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value, 10) || "" })}
                          />
                        </div>
                        {/* Input Materi */}
                        <div className="flex flex-col p-2">
                          <label className="text-sm pb-2 font-medium">Materi:</label>
                          <input
                            className=" border-2 border-gray-400 p-2 rounded-xl  "
                            type="text"
                            name="description"
                            placeholder="Text"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          />
                        </div>
                        {/* Input Video Link */}
                        <div className="flex flex-col p-2">
                          <label className="text-sm pb-2 font-medium">Video Link:</label>
                          <input className=" border-2 border-gray-400 p-2 rounded-xl  " type="text" name="videoUrl" placeholder="Text" value={formData.videoUrl} onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })} />
                        </div>
                        {/* Id Mentor */}
                        <div className="flex flex-col p-2">
                          <label className="text-sm pb-2 font-medium">Id Mentor:</label>
                          <input className=" border-2 border-gray-400 p-2 rounded-xl  " type="text" name="userId" placeholder="Text" value={formData.userId} onChange={(e) => setFormData({ ...formData, userId: e.target.value })} />
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Tutup
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </form>
          </>
        ) : null}
      </div>
    </>
  );
};

export default KelolaKelasPage;
