//Components
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Images
import InfotechLogo from "../assets/Images/png_logo_infotech.png";

// Icons
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Meet the Board", href: "/board" },
    { name: "Achievements", href: "/achievement" },
    { name: "What We Do", href: "/activity" },
    { name: "Event Calendar", href: "/calendar" },
  ];

  return (
    <nav className="shadow-md top-0 left-0 w-full z-50">
      {/* The reason that i added max-w-7xl is because that if the screen is to large then the logo and the links will too seperated */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={InfotechLogo} className="h-16" />

        {/* Links for pages that have Large screen */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={`idx-${item.href}`}
              to={item.href}
              className={`${
                currentPage.pathname == item.href
                  ? "text-yellow-300"
                  : "text-white"
              } hover:text-yellow-300 transition font-medium`}
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
            {isOpen ? (
              <X color="white" size={28} />
            ) : (
              <Menu color="white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Links(Small Screen) */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navigation.map((item) => (
              <Link
                to={item.href}
                className={`${
                  currentPage.pathname == item.href
                    ? "text-yellow-300"
                    : "text-white"
                } transition font-medium`}
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
        </div>
      )}
    </nav>
  );
};

export default NavBar;
