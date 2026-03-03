// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white px-6 py-3 w-full flex justify-between">
//       <Link to="/" className="font-bold text-lg">Branded used car</Link>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/CarList">carList</Link>
//         <Link to='CarForm'>Add car</Link>
//          <Link to='Update'>update</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

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
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/carlist" className="hover:text-gray-300">Car List</Link>
          <Link to="/carform" className="hover:text-gray-300">Add Car</Link>
          <Link to="/update" className="hover:text-gray-300">Update</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-2 bg-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/carlist" onClick={() => setIsOpen(false)}>Car List</Link>
          <Link to="/carform" onClick={() => setIsOpen(false)}>Add Car</Link>
          <Link to="/update" onClick={() => setIsOpen(false)}>Update</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;