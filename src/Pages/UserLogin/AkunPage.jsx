import MobileNavbar from "../../Components/UserLogin/MobileNavbar";
import NavbarComponent from "../../Components/UserLogin/NavbarComponent";

const AkunPage = () => {
  return (
    <>
      <div className="h-full bg-[#EBF3FC] pb-32 md:w-full ">
        <div className="hidden md:block">
          <NavbarComponent />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </>
  );
};

export default AkunPage;
