const PasswordSettingsComponent = () => {
  return (
    <>
      <div className="text-md font-bold text-center">Ubah Password</div>
      <div className="text-xs md:text-base py-2">
        <p className="pb-2 font-medium">Masukkan Password Lama</p>
        <input type="password" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="password lama" />
      </div>
      <div className="text-xs md:text-base py-2">
        <p className="pb-2 font-medium">Masukkan Password Baru</p>
        <input type="password" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="password baru" />
      </div>
      <div className="text-xs md:text-base py-2">
        <p className="pb-2 font-medium">Ulangi Password Baru</p>
        <input type="password" className="border-2 rounded-xl py-3 px-3 w-full" placeholder="ulangi password baru" />
      </div>
      <div className="py-2">
        <button className="bg-[#6148FF] text-white py-2 px-2 w-full rounded-2xl">Simpan Ubah Password</button>
      </div>
    </>
  );
};

export default PasswordSettingsComponent;
