import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-violet-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        <div className="text-white text-xl font-bold tracking-wide">
          Edit<span className="text-yellow-300">User</span>Panel
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Dashboard</li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Users</li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Settings</li>
          <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Reports</li>
        </ul>

        {/* User Avatar / Login Button */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <button className="text-white bg-yellow-400 hover:bg-yellow-500 font-semibold px-4 py-1.5 rounded-md transition duration-200">
            Admin
          </button> 
        </div> */}

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 text-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Dashboard</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Users</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Settings</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Reports</li>
          </ul>
          <div className="flex justify-center py-3 border-t border-indigo-500">
            <button className="text-indigo-600 bg-yellow-400 hover:bg-yellow-500 font-semibold px-5 py-1.5 rounded-md transition duration-200">
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
