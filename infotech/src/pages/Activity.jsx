import React from "react";
import NavBar from "../components/Navbar";

//Images
import TallerDeCyber from "../assets/Images/Crystal_Taller_Linux101_img1.png";

const Activity = () => {
    const TypeOfActivity = ({left=false, date, text, title, img}) => {

        return (
            <>
            {left && 
            
            }
                <div className="xl:text-4xl md:text-3xl sm:text-2xl text-white font-mono">
                    <div className="flex flex-wrap xl:mb-40 xl:mt-12 md:mb-20 md:mt-2 sm:mb-10 sm:mt-5 p-8">

                        <img className="border object-cover border-white ml-auto w-full md:w-2/5 lg:w-2/5 order-1 md:order-2 mb-4 md:mb-0"
                             src={img} />

                        <div className="w-full md:w-1/2 mt-4 md:mt-0 order-2 md:order-1">
                            <h1 className="animate-text-transition">
                                {title}
                            </h1>

                            <div className="mt-12 ">
                                <p className="relative">{text}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }
      
    return (
        <>
            <NavBar />
            <TypeOfActivity title="Cyber Security" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeCyber} left={false}/>
            <TypeOfActivity title="Computer Science" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeCyber} left={false}/>
        </>

    )
}
export default Activity;