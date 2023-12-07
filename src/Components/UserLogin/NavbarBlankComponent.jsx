const NavbarBlankComponent = () => {
  return (
    <>
      <div className="md:w-full md:flex md:h-28 bg-[#6148FF]">
        <div className="md:flex md:w-[80%] md:mx-auto">
          <div className=" md:flex-auto md:w-64">
            <div className="md:flex md:items-center h-full">
              <div className="text-white text-4xl pr-5 items-center">Belajar</div>
              <div className=" md:ml-6">
                <input className="md:py-5 md:px-8 md:w-[526px] md:rounded-2xl md:text-md invisible md:visible" type="text" placeholder="Cari kursus terbaik.." />
              </div>
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex justify-end items-center h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarBlankComponent;
