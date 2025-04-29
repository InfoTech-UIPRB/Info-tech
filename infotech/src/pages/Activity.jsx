import React from "react";
import { useState } from "react";

//Components
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

//Images
import TallerDeCyber from "../assets/Images/Crystal_Taller_Linux101_img1.png";
import TallerDeNetworking from "../assets/Images/Aurelis_Taller_de_Vlans.png";
import TallerDeComputerScience from "../assets/Images/Josue_Taller_De_Github_img1.png"

const Activity = () => {
    const [selectedOption, setSelectedOption] = useState("option1");

    const TypeOfActivity = ({ left = false, text, title, img, alt }) => {
        return (
            <div className={`flex ${left ? "flex-row-reverse" : "flex-row"}  gap-6 mx-7 mb-18`}>
                {/* Image */}
                <div className="flex-shrink-0">
                    <img className="lg:h-120 lg:w-150 md:h-80 md:w-90 h-48 w-52 object-cover rounded border border-yellow-300 " src={img} alt={alt || "Activity Image"} />
                </div>
    
                {/* Text Section */}
                <div className="text-white flex-1/2">
                    <div className="text-yellow-300 font-bold lg:text-4xl md:text-3xl text-xl mb-2">
                        {title}
                    </div>
                    <div className="lg:text-3xl md:text-xl text-sm font-mono text-left">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
    
      
    return (
        <>
            <NavBar />
                <div className="p-6 fadeInUp-animation">
                  {/* Dropdown */}
                  <div className="mb-4 ml-8">
                    <select
                      className="p-2 border text-yellow-300 border-gray-300 rounded-md lg:text-2xl md:text-lg text-sm"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="option1" className="text-black">Type of Activities</option>
                      <option value="option2" className="text-black">Past Activities</option>
                    </select>
                  </div>
            
                  {/* Conditional rendering */}
                  <div>
                    {selectedOption === "option1" ? (
                        <>
                            <TypeOfActivity title="Cyber Security" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeCyber} left={true}/>
                            <TypeOfActivity title="Computer Science" text="We offer workshops on Mobile Applications, GitHub, and more, with additional topics coming soon. This semester, we're also hosting an event called Leet Code 101 for students who want to improve their problem-solving skills and get hands-on experience with coding challenges." img={TallerDeComputerScience} />
                            <TypeOfActivity title="Networking" text="We give workshops on VLANs and, this semester, we will also offer workshops on networking protocols to help students build a strong foundation in networking." img={TallerDeNetworking} left={true}/> 
                        </>
                    ) : (
                        <>
                            <TypeOfActivity title="Introduction to Github" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeComputerScience} left={true}/>
                            <TypeOfActivity title="Linux 101" text="We offer workshops on Mobile Applications, GitHub, and more, with additional topics coming soon. This semester, we're also hosting an event called Leet Code 101 for students who want to improve their problem-solving skills and get hands-on experience with coding challenges." img={TallerDeCyber} />
                            <TypeOfActivity title="Vlans" text="We give workshops on VLANs and, this semester, we will also offer workshops on networking protocols to help students build a strong foundation in networking." img={TallerDeNetworking} left={true}/> 
                        </>
                    )}
                  </div>
                </div>
            <Footer />
        </>

    )
}
export default Activity;