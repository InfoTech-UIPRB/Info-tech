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
                <div className="relative flex items-center justify-center h-[100vh] bg-white">

                    <Carousel images={ImagesPath}/>
                    <BluryBottom />

                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center pointer-events-none">
                        <div className="text-white px-4 max-w-2xl">
                            <h1 className="text-4xl font-mono mb-4">Welcome to InfoTech!</h1>
                                <p className="text-lg leading-relaxed">
                                    InfoTech is the student association of the Informatics department at the
                                    Interamerican University of Puerto Rico, Bayamón campus. We host weekly events and gatherings to foster
                                    a welcoming space for growth and collaboration in informatics.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
 export default Home;