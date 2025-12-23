import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Nopfp from "../assets/PFP/nopfp.jpg"
import GroupList from "../components/GroupList";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {

    const groupList = [
        {title: "Linux 101", date: "1-1-1"},
        {title: "Git and Github 101", date: "1-1-1"},
    ]

    for(let i = 0; i < 100; i++)
    {
        groupList.push({title: "Linux 101", date: "1-1-1"})
    }
    return (
        <>
            <NavBar />
                <div className=" text-white max-w-full">
                    <Sidebar />
                    <div className="text-center grid place-items-center">
                        <img className="w-50 h-50 object-cover rounded-full shadow-lg" src={Nopfp} />
                        Edwin
                        Computer Science
                        4 year
                        Member
                        <div>
                            Activity participated
                        </div>
                    </div>
                    
                    <GroupList information={groupList} />
                </div>
            <Footer />
        </>
    )
};

export default DashBoard;