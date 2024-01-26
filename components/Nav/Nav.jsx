// components/Navbar.js
import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-white text-black p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-black text-xl font-bold">AR-glasses</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Services</a>
          <a href="#" className="text-black">Contact</a>
        </div>
        {/* Add a mobile menu button for medium and smaller screens */}
        <div className="md:hidden">
          {/* Add your mobile menu button here (e.g., a hamburger icon) */}
        </div>
      </div>
      {/* Responsive mobile menu for small screens */}
      <div className="md:hidden mt-4">
        <a href="#" className="block text-black">Home</a>
        <a href="#" className="block text-black">About</a>
        <a href="#" className="block text-black">Services</a>
        <a href="#" className="block text-black">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
