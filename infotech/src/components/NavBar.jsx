import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons

import InfotechLogo from "../assets/Images/png_logo_infotech.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
      {/* The reason that i added max-w-7xl is because that if the screen is to large then the logo and the links will too seperated */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={InfotechLogo} className="h-16"/>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-300 transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-300 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
