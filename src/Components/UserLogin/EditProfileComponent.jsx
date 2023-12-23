const EditProfileComponent = () => {
  return (
    <>
      <div className="py-2">
        <div className="text-center">Foto</div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Nama</p>
          <input type="text" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="nama lengkap" />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Email</p>
          <input type="email" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="email" />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Nomor Telepon</p>
          <input type="text" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="nomor telepon" />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Negara</p>
          <input type="text" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="negara tempat tinggal" />
        </div>
        <div className="text-xs md:text-base py-2">
          <p className="pb-2 font-medium">Kota</p>
          <input type="text" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="kota tempat tinggal" />
        </div>
        <div className="py-2">
          <button className="bg-[#6148FF] text-white py-2 px-2 w-full rounded-2xl">Simpan Profil Saya</button>
        </div>
      </div>
    </>
  );
};

export default EditProfileComponent;
