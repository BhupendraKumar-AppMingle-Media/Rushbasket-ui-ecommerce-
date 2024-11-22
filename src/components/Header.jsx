import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

// logo
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
      <header className="w-full sticky top-0 shadow-lg" style={{ backgroundColor: '#86c3d7' }}>
        <div className="flex justify-between items-center mx-4 p-0.5">
          <div className="flex items-center">
            {/* Add logo here */}
            <img src={logo} alt="Logo" className="h-auto max-w-[80px] cursor-pointer" />
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="block w-[512px] pl-4 pr-12 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {/* Search Button with Icon */}
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                <FiSearch className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="text-white md:flex justify-center items-center gap-5 text-4xl">
            <div className="cursor-pointer text-2xl text-[#172554]">
              <MdLightMode />
            </div>
            <div className="cursor-pointer text-2xl text-[#172554]">
              <IoNotifications />
            </div>
            <div className="cursor-pointer text-2xl text-[#172554]">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
