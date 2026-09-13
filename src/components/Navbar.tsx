import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 py-4">

        
        <div className="hidden md:flex items-center justify-between">

         
          <div className="flex items-center gap-2">
            <img src={logo} alt="Dev Stack Logo" />
          </div>

         
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <a href="" className="text-pink-500">
                Home
              </a>
            </li>

            <li>
              <a href="" className="text-gray-500 hover:text-pink-500 transition">
                Technologies
              </a>
            </li>

            <li>
              <a href="" className="text-gray-500 hover:text-pink-500 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="" className="text-gray-500 hover:text-pink-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="" className="text-gray-500 hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>

          
          <div className="flex items-center gap-3">
            <button className="font-medium text-gray-500 hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="btn btn-sm rounded-full bg-pink-500 border-none text-white hover:bg-pink-600">
              Sign Up
            </button>
          </div>
        </div>

        
        

        <div className="flex md:hidden items-center justify-between">

         
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          
          <img src={logo} alt="Dev Stack Logo"
            className="h-8"
          />


          <div className="flex items-center gap-2">
            <button className="text-sm text-gray-500">
              Sign In
            </button>

            <button className="btn btn-xs rounded-full bg-pink-500 border-none text-white">
              Sign Up
            </button>
          </div>
        </div>

        
        
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 border-t pt-4 text-gray-600">

            <li>
              <a href="" className="block hover:text-pink-500">
                Home
              </a>
            </li>

            <li>
              <a href="" className="block hover:text-pink-500">
                Technologies
              </a>
            </li>

            <li>
              <a href="" className="block hover:text-pink-500">
                Projects
              </a>
            </li>

            <li>
              <a href="" className="block hover:text-pink-500">
                About
              </a>
            </li>

            <li>
              <a href="" className="block hover:text-pink-500">
                Contact
              </a>
            </li>

          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;