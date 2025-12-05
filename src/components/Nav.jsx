import React from 'react';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto font-sans">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/logo.png" alt="Haven Ark" className="h-8 w-auto mix-blend-multiply" />
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#masterclass" className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors">
          Masterclass
        </a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <a href="#login" className="hidden md:block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors">
          Login
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-lg font-semibold transition-colors shadow-blue-200 shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Nav;