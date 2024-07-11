import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/Logo.png";
import dropdown from "../assets/dropdown.svg";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <div className="flex md:justify-between w-auto px-20 full  bg-blue-300 z-20 top-0 left-0 self-baseline sticky backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-blue-200 bg-lightblue-100">
      {/* LOGO */}
      <div className="flex items-center">
      <Link to="/">
    <img src={logo} alt="logo" className="hidden sm:block md:w-35 md:h-20 mt-4 sm:mt-2 sm:pb-2" />
  </Link>
  <Link to="/" className="hidden sm:block ml-2">
    <p className="text-xl font-serif font-extrabold">HighFlyDining</p>
  </Link>
        <Link to="/">
          <p className="sm:hidden mt-8 -ml-16 text-xl font-serif font-extrabold">HighFlyDining</p>
        </Link>
      </div>
      {/* PAGES */}
      <div className="mr-7 mb-1 ">
        <ul className="flex gap-10 md:mt-10 mt-9 ml-2 mr-8 sm:ml-0">
          <Link to="/">
            <li className="hidden sm:block font-bold text-lg hover:text-blue-800"> Home </li>
          </Link>
          <Link to="/meals">
            <li className="font-bold text-lg hover:text-blue-800"> Meals </li>
          </Link>
        </ul>
      </div>
      {/* Authentication */}
      <div className="mt-8 ml-16 sm:ml-0 pb-4 sm:pb-0 relative">
        {isAuthenticated && (
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <img className="h-10 w-10 rounded-full" src={user.picture} alt={user.name} />
              <span>{user.name}</span>
            </div>
            <img src={dropdown} alt="dropdown" width={20} height={20} onClick={handleUserDropdownToggle} className="hidden sm:block self-center ml-2 cursor-pointer" />
            {showUserDropdown && (
              <div className="absolute mt-12 w-40 bg-white rounded-lg shadow-lg">
                <div className="py-1">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</Link>
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                </div>
              </div>
            )}
          </div>
        )}
        {!isAuthenticated && (
          <button className="w-auto font-medium rounded-lg text-xs sm:text-sm px-4 py-1 md:py-2 text-center text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
