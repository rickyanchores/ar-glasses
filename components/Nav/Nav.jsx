// components/Navbar.js
import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-xl font-bold">AR-glasses</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        {/* Add a mobile menu button for medium and smaller screens */}
        <div className="md:hidden">
          {/* Add your mobile menu button here (e.g., a hamburger icon) */}
        </div>
      </div>
      {/* Responsive mobile menu for small screens */}
      <div className="md:hidden mt-4">
        <a href="#" className="block text-white">Home</a>
        <a href="#" className="block text-white">About</a>
        <a href="#" className="block text-white">Services</a>
        <a href="#" className="block text-white">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
