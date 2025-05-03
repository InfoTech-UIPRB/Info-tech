import React from "react";
import { useState } from "react";

//Components
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

//Images
import TallerDeCyber from "../assets/Images/Crystal_Taller_Linux101_img1.png";
import TallerDeNetworking from "../assets/Images/Aurelis_Taller_de_Vlans.png";
import TallerDeComputerScience from "../assets/Images/Josue_Taller_De_Github_img1.png"
import TallerDeMobileDevelopment from "../assets/Images/Activities/mobile_development.jpeg"
import PrimeraReunion from "../assets/Images/Activities/primera_reunion_de_asosacion.jpeg"

//Icons
import { Link } from "lucide-react";

const Activity = () => {
    const [selectedOption, setSelectedOption] = useState("option1");

    // Change name of component
    const TypeOfActivity = ({ left = false, text, title, img, social, alt }) => {
        return (
            <div className={`flex ${left ? "flex-row-reverse" : "flex-row"} max-sm:flex-col max-sm:text-center gap-6 mx-7 mb-18`}>
                {/* Image */}
                <div className="flex-shrink-0 max-sm:mx-auto">
                    <img className="lg:h-120 lg:w-140 md:h-80 md:w-90 h-48 w-52 object-cover rounded border border-yellow-300" src={img} alt={alt || "Activity Image"} />
                </div>
    
                {/* Text Section */}
                <div className="text-white flex-1/2">
                    <div className="text-yellow-300 font-bold lg:text-4xl md:text-3xl text-xl mb-2">
                        {title}
                    </div>
                    <div className="lg:text-3xl md:text-xl text-sm font-mono ">
                        {text}
                    </div>
                    {social && typeof social == "string" &&
                        <a href={social} target="_blank" className="mt-2">
                            <Link size={40}/>
                        </a>
                    }
   
                </div>
            </div>
        )
    }
       
    return (
        <>
            <NavBar />
                <div className="p-6 fadeInUp-animation ">
                  {/* Dropdown */}
                  <div className="md:mb-4 mb-10 md:ml-8 max-sm:flex max-sm:justify-center">
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
                        {}
                            <TypeOfActivity title="Cyber Security" text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." img={TallerDeCyber} left={true}/>
                            <TypeOfActivity title="Computer Science" text="We offer workshops on Mobile Applications, GitHub, and more, with additional topics coming soon. This semester, we're also hosting an event called Leet Code 101 for students who want to improve their problem-solving skills and get hands-on experience with coding challenges." img={TallerDeComputerScience} />
                            <TypeOfActivity title="Networking" text="We give workshops on VLANs and, this semester, we will also offer workshops on networking protocols to help students build a strong foundation in networking." img={TallerDeNetworking} left={true}/> 
                        </>
                    ) : (
                        <>
                            <TypeOfActivity
                                img={PrimeraReunion} 
                                title="Primera Reunión de la Asociación" 
                                text="Cada semestre comenzamos con una reunión donde la directiva se presenta y se discuten las actividades futuras de la Asociación. También realizamos dinámicas para integrar a los nuevos miembros."
                            />
                            <TypeOfActivity
                                img={TallerDeMobileDevelopment} 
                                title="Mobile Development"
                                text="Un Software Developer de INVID ofreció un taller de desarrollo móvil utilizando React Native. Además, compartió su experiencia trabajando en la industria y en INVID."
                            />
                            <TypeOfActivity 
                                title="Tour de HUB787" 
                                text="Visitamos el data center HUB787, el único centro de datos certificado en Puerto Rico. Durante el recorrido, aprendimos sobre la entrada de cables submarinos, la nube física de AWS, servidores, el concepto de colocación, IoT y mucho más."
                                social="https://www.instagram.com/p/DJJwYkCRiKy/?img_index=2&igsh=MWJwaDZvcXVlYmloaw=="
                            />
                            <TypeOfActivity 
                                title="Orientación de Oracle" 
                                text="Recibimos la visita de Auro Roque de Oracle, quien nos habló sobre el programa de pasantías 'Generación Oracle' y compartió oportunidades de crecimiento profesional."
                            />
                            <TypeOfActivity 
                                title="Fundamentos de Auditoría de Sistemas de Información" 
                                text="Se ofreció una charla introductoria sobre los principios de auditoría de sistemas de información, incluyendo riesgos, controles, y buenas prácticas en entornos tecnológicos."
                            />
                            <TypeOfActivity 
                                title="Cyber Defence: Zero to Hero" 
                                text="Los estudiantes de la Asociación participaron en una experiencia práctica en EVERTEC sobre ciberseguridad, donde simularon ataques y aprendieron técnicas de defensa digital."
                            />
                            <TypeOfActivity 
                                title="Charla sobre Emprendimiento en Tecnología (Terminal 34)" 
                                text="Bryan García, fundador de Terminal 34, ofreció una charla inspiradora sobre cómo comenzar tu propia empresa en el campo de la tecnología."
                            />
                            <TypeOfActivity 
                                title="Taller de OSINT" 
                                text="Dos miembros de la Asociación ofrecieron un taller sobre Open Source Intelligence (OSINT), enseñando cómo recopilar información pública para fines de seguridad y análisis."
                            />
                            <TypeOfActivity 
                                title="Phishing Workshop" 
                                text="Dos miembros de la Asociación ofrecieron un taller sobre phishing, donde explicaron técnicas comunes de ataque y cómo protegerse de ellas."
                            />
                            <TypeOfActivity 
                                title="LeetCode 101" 
                                text="En este taller, dos miembros de la Asociación enseñaron problemas comunes de entrevistas técnicas utilizando la plataforma LeetCode y ofrecieron consejos para prepararse eficazmente."
                            />
                            <TypeOfActivity 
                                title="Inteligencia Artificial" 
                                text="El director del Departamento de Ciencia de Computadoras, Jaime Yeckle, ofreció un taller sobre los fundamentos de la inteligencia artificial y su aplicación en la industria."
                            />
                            <TypeOfActivity 
                                title="Bases de Datos" 
                                text="José Rodríguez, director del Departamento de Informática, ofreció un taller sobre bases de datos relacionales, cubriendo temas como diseño, consultas SQL y buenas prácticas."
                            />
                            <TypeOfActivity 
                                title="Introducción a Reverse Engineering usando GHIDRA" 
                                text="Se ofreció una introducción práctica al análisis inverso de software utilizando GHIDRA, una herramienta desarrollada por la NSA. Los estudiantes exploraron binarios y aprendieron conceptos básicos de ingeniería inversa."
                            />
                            <TypeOfActivity 
                                title="Charla sobre Ciberseguridad y Oportunidades de Internados" 
                                text="La compañía DRIVEN, especializada en ciberseguridad, ofreció una charla sobre tendencias actuales del sector y oportunidades de internados disponibles para estudiantes interesados."
                            />

                            <TypeOfActivity 
                                title="Introduction to Github" 
                                text="We give workshops on Linux and Capture the Flag (CTF) to provide students with hands-on experience in cybersecurity." 
                                img={TallerDeComputerScience} 
                                left={true}
                            />
                            <TypeOfActivity 
                                title="Linux 101" 
                                text="We offer workshops on Mobile Applications, GitHub, and more, with additional topics coming soon. This semester, we're also hosting an event called Leet Code 101 for students who want to improve their problem-solving skills and get hands-on experience with coding challenges." 
                                img={TallerDeCyber} 
                            />
                            <TypeOfActivity 
                                title="Vlans" 
                                text="We give workshops on VLANs and, this semester, we will also offer workshops on networking protocols to help students build a strong foundation in networking." 
                                img={TallerDeNetworking} 
                                left={true}
                            /> 
                        </>
                    )}
                  </div>
                </div>
            <Footer />
        </>

    )
}
export default Activity;