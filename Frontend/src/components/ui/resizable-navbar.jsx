import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ children }) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[1000] bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg">
      {children}
    </nav>
  );
};

export const NavBody = ({ children }) => {
  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">{children}</div>
    </div>
  );
};

export const NavItems = ({ items }) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {items.map((item, idx) => (
        <Link
          key={`nav-link-${idx}`}
          to={item.link}
          className="text-lg font-medium text-[#017979] hover:text-black transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <Link to="/" className="no-underline">
      <span className="text-3xl font-medium text-[#103d01] font-['Trebuchet_MS']">
        SPORT Club
      </span>
    </Link>
  );
};

export const NavbarButton = ({ variant = "primary", children, className = "", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors text-sm";
  const variantStyles = {
    primary: "bg-[#017979] text-white hover:bg-black",
    secondary: "bg-gray-100 text-[#017979] hover:bg-gray-200"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const MobileNav = ({ children }) => {
  return <div className="md:hidden">{children}</div>;
};

export const MobileNavHeader = ({ children }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-[#017979] hover:text-black focus:outline-none p-2 bg-white/80 rounded-lg shadow-md"
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
};

export const MobileNavMenu = ({ isOpen, children, onClose }) => {
  return (
    <div
      className={`fixed inset-4 bg-white/95 backdrop-blur-md rounded-xl z-[1001] transform transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full p-8 space-y-6">
        {children}
      </div>
    </div>
  );
};