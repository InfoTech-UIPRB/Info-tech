import { ImagesPath } from "../components/ImagesPath";
import Carousel from "../components/Carousel.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const BlurryOverlay = () => {
    return (
      <div className="absolute bottom-0 left-0 w-full lg:h-120 h-54 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
    );
  };

  return (
    <>
      <NavBar />

      <div className="max-sm:mt-18 mt-5 flex-grow flex items-center justify-center mb-10 fadeInUp-animation">
        <div className="relative w-full h-[70vh] flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center px-4">
            <h1 className="lg:text-5xl text-4xl font-bold text-white drop-shadow-lg text-center">
              Welcome to InfoTech!
            </h1>
            <span className="text-lg font-normal text-white drop-shadow-lg text-center">
              Connecting students, fostering innovation
            </span>
          </div>

          <div className="w-full flex justify-center max-sm:p-15">
            <Carousel images={ImagesPath} />
            <BlurryOverlay />
          </div>

          <p className="absolute bottom-6 lg:max-w-4xl md:max-w-lg max-sm:hidden text-center lg:text-2xl md:text-lg font-bold text-sm lg:px-0 md:px-5 sm:px-15 px-15 text-white drop-shadow-md">
            InfoTech is the student association of the Informatics department at
            the Interamerican University of Puerto Rico, Bayamón campus. We host
            weekly events and gatherings to foster a welcoming space for growth
            and collaboration in informatics.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
