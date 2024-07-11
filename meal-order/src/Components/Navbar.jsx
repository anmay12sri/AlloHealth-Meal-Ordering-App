import   { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import dropdown from "../assets/dropdown.svg";

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div className="flex md:justify-between w-auto px-20 full z-20 top-0 left-0 self-baseline sticky backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-blue-200">
      {/* LOGO */}
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="hidden sm:block md:w-40 md:h-20 mt-4 sm:mt-2 sm:pb-2"
          />
        </Link>
        <Link to="/">
          <p className="sm:hidden mt-8 -ml-16 text-xl font-serif font-extrabold">
            AeroCuisine
          </p>
        </Link>
      </div>
      {/* PAGES */}
      <div>
        <ul className="flex gap-10 md:mt-10 mt-8 ml-2 sm:ml-0">
          <Link to="/">
            <li className="hidden sm:block font-semibold text-lg hover:text-amber-800">
              Home
            </li>
          </Link>
          <Link to="/meals">
            <li className="font-semibold text-lg hover:text-amber-800">Meals</li>
          </Link>
        </ul>
      </div>
      {/* User Dropdown */}
      <div className="mt-8 ml-16 sm:ml-0 pb-4 sm:pb-0 relative">
        <button
          className="flex items-center gap-2 font-semibold text-lg hover:text-amber-800"
          onClick={handleUserDropdownToggle}
        >
          <span>log In</span>
          <img src={dropdown} alt="dropdown" className="w-5 h-5" />
        </button>
        {showUserDropdown && (
          <div className="absolute mt-4 w-40 bg-white rounded-lg shadow-lg">
            <div className="py-1">
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Settings
              </Link>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;