import React from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Page404 = () => {

            return (
              <>
                <NavBar />
                <div className="grid h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 fadeInUp-animation">
                  <div className="text-center">
                    <p className=" text-7xl font-semibold text-yellow-300">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-yellow-300 sm:text-7xl">
                      Page not found
                    </h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                      Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <Link to="/pages">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" > 
                            Go to Home Page
                        </button>
                    </Link>

                  </div>
                </div>
                <Footer />
              </>
            )
}

export default Page404;