import React, { useState } from "react";
import { Menu, X} from "lucide-react"; // For icons

import InfotechLogo from "../assets/Images/png_logo_infotech.png"
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Make a current index. If i am in Directive page soo the directive link should be green o yellow to indicate where i am.
  const navigation = [
    { name: "Home", href: "../pages/" },
    { name: "Directive", href: "../pages/directive" },
    { name: "Achievements", href: "../pages/achievement" },
    { name: "Activity", href: "../pages/activity" },
    { name: "Calendar", href: "../pages/calendar"}
  ];

  return (
    <nav className="bg-black shadow-md top-0 left-0 w-full z-50">
      {/* The reason that i added max-w-7xl is because that if the screen is to large then the logo and the links will too seperated */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={InfotechLogo} className="h-16"/>

        {/* Links for pages that have Large screen */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              to = {item.href}
              className="text-white hover:text-yellow-300 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
          {/* This is for Joining the assosiation */}
          <div className="rounded-sm bg-yellow-300 px-2 py-1">
            <Link
              to="https://infotech.fillout.com/t/dtBhkArfxLus"
              target="_blank"
              className="text-black hover:text-white transition font-medium"
            >
              Join
            </Link>
          </div>


        </div>

        {/* Mobile menu button(Small Screen) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links(Small Screen) */}
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
