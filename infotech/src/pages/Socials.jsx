import React from "react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Socials = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <InstagramIcon size={40} />,
      url: "https://www.instagram.com/infotech.uiprb/",
      color: "text-pink-500"
    },
    {
      name: "Github",
      icon: <GithubIcon size={40} />,
      url: "https://github.com/InfoTech-UIPRB",
      color: "text-indigo-500"
    },
  ];

  return (
    <>
      <NavBar />
        <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-5">
            {socials.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-xl hover:scale-105 transition transform duration-300 w-50`}
                      >
                        <div className={`${social.color} mb-2`}>{social.icon}</div>
                        <span className="text-xl font-semibold text-black">{social.name}</span>
                    </a>
            ))}
        </div>
      <Footer />
    </>
  );
};

export default Socials;
