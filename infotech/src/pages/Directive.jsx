import React from "react";

//Components
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

//Images
import President from "../assets/PFP/chelimar-pfp.png"
import Nopfp from "../assets/PFP/nopfp.jpg"
import Secretaria from "../assets/PFP/angelie-pfp.png"
import Vocal01 from "../assets/PFP/jeremy-pfp.jpg"
import Vocal04 from "../assets/PFP/nordiel-pfp.png"
import Vocal03 from "../assets/PFP/edwin-pfp.jpg"
import Vocal02 from "../assets/PFP/aurelis-pfp.png"

//Resumes
import EdwinResume from "../assets/Resumes/Edwin_Manuel_Vazquez_Vega_resume 2025.pdf"

//Icons
import { GithubIcon, LinkedinIcon, Mail, FileTextIcon } from "lucide-react";


const Directive = () => {

    const MemberCards = ({name, role, img=Nopfp, linkedin, gitHub, mail, resume}) => {
        //Replacing the spaces with _ when saving the file
        const modifyName = name.replace(" ", "_")
        return (
            <div className="flex flex-col items-center pb-10 pt-10 border-3 border-white">
                {/* Image */}
                <img className="w-35 h-35 object-cover rounded-full shadow-lg" src={img}
                     alt="Image of Directive Member" />
                {/* Name */}
                <h5 className="mb-1 text-xl font-medium text-white text-center">{name}</h5>
                {/* Role */}
                <span className="text-sm text-gray-500">{role}</span>
                {/* Links */}
                <div className="flex gap-5 pt-5">
                    {gitHub &&
                        <a href={gitHub} target="_blank">
                            <GithubIcon color="white"/>
                        </a>

                    }

                    {linkedin &&
                        <a href={linkedin} target="_blank">
                            <LinkedinIcon color="white"/>                            
                        </a>

                    }
                    {mail &&
                        <a href={`mailto:${mail}`} target="_blank">
                            <Mail color="white"/>                               
                        </a>
                     
                    }

                    {resume &&
                        <a href={resume} download={`${modifyName}_resume`} target="_blank">
                            <FileTextIcon color="white"/>                               
                        </a>
                    }
                </div>

            </div>
        )
    }
    return (
        <>
            <NavBar />
            <div className="flex justify-center fadeInUp-animation">
                <div
                    className="md:w-full
                               sm:w-110
                               w-60
                               max-w-6xl
                               grid grid-cols-1 
                               sm:grid-cols-2 
                               md:grid-cols-3 
                               lg:grid-cols-4 
                               xl:grid-cols-5 
                               gap-6 
                               p-4">

                    <MemberCards 
                        name="Chelimar Morales"
                        role="President"
                        img={President}
                        linkedin="https://www.linkedin.com/in/chelimar-morales/"
                        mail=""
                    />
                    <MemberCards
                        name="Carlos Negron"
                        role="Vice President" 
                        mail="cnegron6786@interbayamon.edu"
                    />
                    <MemberCards 
                        name="Josue Vazquez" 
                        role="Tesorero" 
                    />
                    <MemberCards 
                        name="Jeremmy Leiva"
                        role="Vocal"
                        img={Vocal01}
                        mail="jleiva2084@interbayamon.edu"
                        linkedin="https://www.linkedin.com/in/jeremmy-leiva-aguilar-jem/"
                    />
                    <MemberCards 
                        name="Aurelis Otero" 
                        role="Vocal"
                        img={Vocal02}
                        linkedin="https://www.linkedin.com/in/aurelis-otero-02348428a/"
                    />
                    <MemberCards 
                        name="Edwin Vazquez"
                        role="Vocal"
                        img={Vocal03}
                        linkedin="https://www.linkedin.com/in/edwin-vazquez-a8a208279/"
                        gitHub="https://github.com/Revokeez"
                        mail="edwinmvazquez1@gmail.com"
                        resume={EdwinResume}
                    />
                    <MemberCards
                        name="Nordiel Martinez" 
                        role="Vocal" 
                        img={Vocal04}
                        linkedin="https://www.linkedin.com/in/nordielmartinez/"
                        gitHub="https://github.com/nordiel"
                    />
                    <MemberCards 
                        name="Crystal Mercado"
                        role="Vocal"
                        linkedin="https://www.linkedin.com/in/crystal-mercado/"
                        mail="cmercado7908@interbayamon.edu"
                        />
                    <MemberCards 
                        name="Hacniel Cardona" 
                        role="Mentor" 
                    />
                    <MemberCards 
                        name="Jose Rodriguez" 
                        role="Director" 
                    />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Directive