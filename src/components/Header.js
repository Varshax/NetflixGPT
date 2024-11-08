import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const isLoginPage = location.pathname === "/";
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 mb-8 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="shrink-0 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              className="w-20 object-contain mt-8"
              src="/BingeBotLogo.png"
              alt="Brand Logo"
            />
          </Link>

          {user && !isLoginPage && (
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/browse"
                className="text-purple-600 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                Browse
              </Link>
              <Link
                to="/movies"
                className="text-purple-600 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                Movies
              </Link>
              <Link
                to="/tv-shows"
                className="text-purple-600 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                TV Shows
              </Link>
              <Link
                to="/my-list"
                className="text-purple-600 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
              >
                My List
              </Link>
            </nav>
          )}

          {user && (
            <div className="flex items-center space-x-4">
              <button
                className="text-white hover:text-purple-300 transition-colors duration-300"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <div className="relative group">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  aria-label="User menu"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-300">
                    {user.displayName ? user.displayName[0].toUpperCase() : "U"}
                  </div>
                  <svg
                    className="w-4 h-4 text-white group-hover:text-purple-300 transition-colors duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
