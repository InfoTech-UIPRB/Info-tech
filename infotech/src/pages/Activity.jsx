import React from "react";

//Components
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

//Images
import TallerDeCyber from "../assets/Images/Crystal_Taller_Linux101_img1.png";
import TallerDeNetworking from "../assets/Images/Aurelis_Taller_de_Vlans.png";
import TallerDeComputerScience from "../assets/Images/Josue_Taller_De_Github_img1.png"

const Activity = () => {
    const TypeOfActivity = ({ left = false, text, title, img, alt }) => {
        return (
            <div className={`flex ${left ? "flex-row-reverse" : "flex-row"}  gap-6 mx-4 mb-7`}>
                {/* Image */}
                <div className="flex-shrink-0">
                    <img className="lg:h-150 lg:w-180 md:h-80 md:w-90 h-48 w-52 object-cover rounded" src={img} alt={alt || "Activity Image"} />
                </div>
    
                {/* Text Section */}
                <div className="text-white flex-1/2">
                    <div className="font-bold lg:text-6xl md:text-3xl text-xl mb-2 text-cente">
                        {title}
                    </div>
                    <div className="lg:text-4xl md:text-xl text-sm font-mono text-left">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
    
      
    return (
        <>
            <NavBar />
            <TypeOfActivity title="Cyber Security" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeCyber} left={true}/>
            <TypeOfActivity title="Computer Science" text="We offer workshops on Mobile Applications, GitHub, and more, with additional topics coming soon. This semester, we're also hosting an event called Leet Code 101 for students who want to improve their problem-solving skills and get hands-on experience with coding challenges." img={TallerDeComputerScience} />
            <TypeOfActivity title="Networking" text="We give workshops on VLANs and, this semester, we will also offer workshops on networking protocols to help students build a strong foundation in networking." img={TallerDeNetworking} left={true}/>
            <Footer />
        </>

    )
}

// import React, { useState } from 'react';

// function Activity() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={toggleSidebar}
//       >
//         Open Sidebar
//       </button>

    //   {isSidebarOpen && (
    //     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={toggleSidebar}>
    //       <div
    //         className="relative bg-white w-96 max-w-lg rounded-md my-10 ml-0"
    //         onClick={(e) => e.stopPropagation()}
    //       >
    //         <div className="flex justify-between items-center bg-gray-100 p-4">
    //           <h2 className="text-lg font-bold">Sidebar</h2>
    //           <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-800">
    //             Close
    //           </button>
    //         </div>
    //         <div className = "p-4">
    //             <ul>
    //                 <li>Menu Item 1</li>
    //                 <li>Menu Item 2</li>
    //                 <li>Menu Item 3</li>
    //             </ul>
    //         </div>
    //       </div>
    //     </div>
    //   )}
//     </div>
//   );
// }

// export default Activity;
export default Activity;