import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          Branded Rent Car
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/carlist" className="hover:text-gray-300">Car List</Link>
          <Link to="/CarForm" className="hover:text-gray-300">Add Car</Link>
          <Link to="/Update" className="hover:text-gray-300">Update</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link to="/" className="block py-2 hover:text-gray-300">Home</Link>
          <Link to="/carlist" className="block py-2 hover:text-gray-300">Car List</Link>
          <Link to="/CarForm" className="block py-2 hover:text-gray-300">Add Car</Link>
          <Link to="/Update" className="block py-2 hover:text-gray-300">Update</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
