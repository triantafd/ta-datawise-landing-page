import ButtonCta from "components/ButtonCta";
import FullSizeRectangle from "components/Rectangle";
import Content from "components/Content";
import Hero from "components/Hero";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <div className="nav container mx-auto p-12 flex flex-col" >
      <div className="flex items-center justify-between" >
        <div className="flex items-center space-x-20" >
          <img src="images/COINCASH.svg" alt='' />
        </div >
        <DesktopNavbar />
        <div className="flex items-center lg:hidden">
          <img src="images/menu.svg" alt='' />
        </div >
      </div >
    </div>
  );
}

export default Navbar;