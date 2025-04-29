import React from "react";

//Images Links
import { ImagesPath } from "../components/ImagesPath";

//Components
import Carousel from "../components/Carousel";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => { 

const BluryBottom = () => {
    {/* This code is for making the image to look blury*/}
    return (        
        <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent opacity-99 pointer-events-none">
        </div>
    )
}

    return (
        <>
        <NavBar />

        {/* Body of Page */}
            <div className="flex-grow">
                <div className="relative flex items-center justify-center h-[70vh] text-white">
                    <div >
                        <h1 className="text-6xl text-center font-bold font-mono mb-4">Welcome to InfoTech!</h1>                    
                        <Carousel images={ImagesPath}/>
                        <BluryBottom />
                        
                    </div>
                    {/* <div className="absolute w-full flex justify-center text-center pointer-events-none">
                        <div className="text-white text-lg">
                            <p className="text-lg leading-relaxed">
                                InfoTech is the student association of the Informatics department at the
                                Interamerican University of Puerto Rico, Bayamón campus. We host weekly events and gatherings to foster
                                a welcoming space for growth and collaboration in informatics.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>

    )
}
 export default Home;