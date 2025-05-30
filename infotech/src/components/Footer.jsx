import React from "react";
import InfotechLogo from "../assets/Images/png_logo_infotech.png"

const Footer = () => {
    return (
        <footer className="text-gray-300 py-10 relative top-auto w-full bottom-0 left-0 right-0">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between">
              {/* <!-- Logo and Description --> */}
              <div className=" md:w-1/3 sm:w-1/2 max-sm:w-16 mb-6 md:mb-0">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={InfotechLogo} alt="InfoTech Logo" className="h-12" />
                  <span className="md:text-2xl text-xl font-bold text-white">InfoTech</span>
                </a>
              </div>
      
              {/* <!-- Social Media --> */}
              <div className="lg:w-1/9 md:w-1/7 sm:w-1/4 w-1/3">
                <h2 className="md:text-xl text-lg font-semibold text-white mb-4">Follow Us</h2>
                <div className="flex space-x-4 max-sm:text-sm">
                  <a href="https://www.instagram.com/infotech.uiprb/" target="_blank" className="text-white hover:text-yellow"><i
                      className="fab fa-instagram"></i> Instagram</a>
                  <a href="https://github.com/InfoTech-UIPRB" target="_blank" className="text-white hover:text-yellow"><i
                      className="fab fa-github"></i> GitHub</a>
                </div>
              </div>
            </div>
      
            {/* <!-- Line --> */}
            <div className="border-t border-gray-700 mt-8"></div>
      
            {/* <!-- Copyright --> */}
            <div className="text-center mt-4 text-white">
              <p>&copy; 2025 InfoTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;