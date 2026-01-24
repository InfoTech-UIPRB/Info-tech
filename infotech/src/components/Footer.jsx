import React from "react";
import InfotechLogo from "../assets/Images/png_logo_infotech.png"
import { InstagramIcon, GithubIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-gray-300 py-10 relative y-10 w-full mt-auto -z-1">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between">
              {/* <!-- Logo and Description --> */}
              <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={InfotechLogo} alt="InfoTech Logo" className="h-12" />
                  <span className="md:text-2xl text-xl font-bold text-white">InfoTech</span>
                </a>
              </div>
      
              {/* <!-- Social Media --> */}
              <div>
                <h2 className="md:text-xl text-lg font-semibold text-white mb-4">Follow Us</h2>
                <div className="space-x-4 max-sm:text-sm flex flex-col space-y-2">
                  <a href="https://www.instagram.com/infotech.uiprb/" target="_blank" className="text-white hover:text-yellow flex flex-row gap-x-1"> <InstagramIcon />Instagram</a>
                  <a href="https://github.com/InfoTech-UIPRB" target="_blank" className="text-white hover:text-yellow flex flex-row gap-x-1"><GithubIcon /> GitHub</a>
                </div>
              </div>
            </div>
      
            {/* <!-- Line --> */}
            <div className="border-t border-gray-700 mt-8"></div>
      
            {/* <!-- Copyright --> */}
            <div className="text-center mt-4 text-white">
              <p>&copy; {new Date().getFullYear()} InfoTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;