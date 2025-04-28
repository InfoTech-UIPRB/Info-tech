import React from "react";
import NavBar from "../components/Navbar";

//Images
import TallerDeCyber from "../assets/Images/Crystal_Taller_Linux101_img1.png";

const Activity = () => {
    const TypeOfActivity = ({ left = false, date, text, title, img, alt }) => {
        return (
            <div className={`flex ${left ? "flex-row-reverse" : "flex-row"}  gap-6 m-4`}>
                {/* Image */}
                <div className="flex-shrink-0">
                    <img className="h-188 w-200 object-cover rounded" src={img} alt={alt || "Activity Image"} />
                </div>
    
                {/* Text Section */}
                <div className="text-white ">
                    <div className="font-bold text-5xl mb-2">
                        {title}
                    </div>
                    <div className="overflow text-4xl">
                        {text}
                    </div>
                    {date && (
                        <div className="text-xs mt-2 text-gray-400">
                            {date}
                        </div>
                    )}
                </div>
            </div>
        )
    }
    
      
    return (
        <>
            <NavBar />
            <TypeOfActivity title="Cyber Security" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeCyber} left={true}/>
            <TypeOfActivity title="Computer Science" text="We offer workshops on Mobile Applications, GitHub, and more, with additional topics coming soon. This semester, we're also hosting an event called Leet Code 101 for students who want to improve their problem-solving skills and get hands-on experience with coding challenges." img={TallerDeCyber} left={false}/>
        </>

    )
}
export default Activity;