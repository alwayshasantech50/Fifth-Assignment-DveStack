import logo from "../assets/images/logo-text.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack Logo"

          />

        </div>

        


        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="" className="text-pink-500">Home</a>
          </li>

          <li>
            <a href="" className="text-gray-500 hover:text-pink-500 transition">Technologies</a>
          </li>

          <li>
            <a href="" className="text-gray-500 hover:text-pink-500 transition">Projects</a>
          </li>

          <li>
            <a href="" className="text-gray-500 hover:text-pink-500 transition">About</a>
          </li>

          <li>
            <a href="" className="text-gray-500 hover:text-pink-500 transition">Contact</a>
          </li>

        </ul>

       



        <div className="flex items-center gap-3">
          <button className="hidden md:block font-medium text-gray-500 ">
            Sign In
          </button>

          <button className="btn btn-sm rounded-full bg-pink-500 border-none text-white hover:bg-pink-600">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;