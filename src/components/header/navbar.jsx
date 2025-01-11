import { Link } from "react-router-dom";
import { useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-[150px] bg-white shadow-md relative">
      <h2 className="text-3xl font-semibold text-custom-orange hover:text-orange-500">
        Logo
      </h2>

      <div className="hidden md:flex mr-auto pl-10">
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-custom-orange hover:font-medium cursor-pointer text-[16px]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-custom-orange hover:font-medium cursor-pointer text-[16px]">
              About us
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-custom-orange hover:font-medium cursor-pointer text-[16px]">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-custom-orange hover:font-medium cursor-pointer text-[16px]">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-custom-orange hover:font-medium cursor-pointer text-[16px]">
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <button className="bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-500">
          Booking Now
        </button>
        <button className="bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-500">
          <LocalGroceryStoreIcon />
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-3xl text-custom-orange">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white bg-opacity-95 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 p-6`}
      >
        <h2 className="text-3xl font-semibold text-custom-orange pb-3 hover:text-orange-500">
        Logo
      </h2>
        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/" onClick={toggleSidebar} className="hover:text-custom-orange hover:font-medium text-[16px]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar} className="hover:text-custom-orange hover:font-medium text-[16px]">
              About us
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleSidebar} className="hover:text-custom-orange hover:font-medium text-[16px]">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/features" onClick={toggleSidebar} className="hover:text-custom-orange hover:font-medium text-[16px]">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar} className="hover:text-custom-orange hover:font-medium text-[16px]">
              Contact us
            </Link>
          </li>
        </ul>
        <button className="mt-6 bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-500 w-full">
          Booking Now
        </button>
        <button className="mt-4 bg-custom-orange text-white px-4 py-2 rounded hover:bg-orange-500 w-full flex justify-center items-center">
          <LocalGroceryStoreIcon className="mr-2" /> Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
