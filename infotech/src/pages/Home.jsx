import React from "react";
import { ImagesPath } from "../components/ImagesPath";
import Carousel from "../components/Carousel";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const BlurryOverlay = () => (
    <div
      className="pointer-events-none 
                 absolute inset-0 
                 bg-gradient-to-t from-black via-black/70 to-transparent"
    />
  );

  return (
    <>
      <NavBar />

      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full h-[70vh] flex flex-col items-center justify-center">


        <div className="absolute top-6 w-full flex flex-col items-center px-4 z-10">
            <h1 className="lg:text-5xl text-4xl font-bold text-white drop-shadow-lg text-center">
                Welcome to InfoTech!
            </h1>
            <span className="mt-0 text-lg font-normal text-white drop-shadow-lg text-center">
                Connecting students, fostering innovation
            </span>
        </div>

          <div className="mt-22 w-full flex justify-center">
            <Carousel images={ImagesPath} />
            <BlurryOverlay />
          </div>

          <p className="absolute bottom-6 max-w-5xl text-center text-2xl font-bold text-white drop-shadow-md px-4">
            InfoTech is the student association of the Informatics department at the
            Interamerican University of Puerto Rico, Bayamón campus. We host weekly
            events and gatherings to foster a welcoming space for growth and
            collaboration in informatics.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
