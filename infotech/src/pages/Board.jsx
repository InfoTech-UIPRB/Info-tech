import React from "react";

//Components
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

//Images
import VicePresident from "../assets/PFP/crystal-pfp.jpeg";

import Default from "../assets/PFP/nopfp.jpg";
import Vocal01 from "../assets/PFP/nordiel-pfp.jpg";
import Vocal02 from "../assets/PFP/aurelis-pfp.png";
import Vocal03 from "../assets/PFP/graciela-pfp.jpeg";
import Vocal04 from "../assets/PFP/axel-pfp.jpeg";
import Vocal05 from "../assets/PFP/yaniel-pfp.jpeg";
import Vocal06 from "../assets/PFP/luis-pfp.jpeg";
import Vocal07 from "../assets/PFP/diego-pfp.jpeg";

import Mentor from "../assets/PFP/hacniel-pfp.jpeg";
import Director from "../assets/PFP/jose-pfp.jpeg";

//Resumes
import AurelisResume from "../assets/Resumes/Aurelis_Otero.pdf";
import CrystalResume from "../assets/Resumes/CrystalE._MercadoOrtiz_Resume.pdf";
import NordielResume from "../assets/Resumes/Nordiel E. Martinez Cardona- Resume2025.pdf";
import YanielResume from "../assets/Resumes/Resume Yaniel.pdf";
import LuisResume from "../assets/Resumes/Luis Diego Martínez Ortiz Resume 2025.pdf";
import DiegoResume from "../assets/Resumes/Resume Diego D. Aguayo Rivera - UPDATED.pdf";

//Icons
import { GithubIcon, LinkedinIcon, Mail, FileTextIcon } from "lucide-react";

class Person {
  constructor(name, role, img, linkedin, gitHub, mail, resume) {
    this.nameInternal = name;
    this.roleInternal = role;
    this.imgInternal = img;
    this.linkedinInternal = linkedin;
    this.gitHubInternal = gitHub;
    this.mailInternal = mail;
    this.resumeInternal = resume;
  }

  get getName() {
    return this.nameInternal;
  }

  set setName(name) {
    this.nameInternal = name;
  }

  get getRole() {
    return this.roleInternal;
  }

  set setRole(role) {
    this.roleInternal = role;
  }

  get getImg() {
    return this.imgInternal;
  }

  set setImg(img) {
    this.imgInternal = img;
  }

  get getLinkedin() {
    return this.linkedinInternal;
  }

  set setLinkedin(linkedin) {
    this.linkedinInternal = linkedin;
  }

  get getGitHub() {
    return this.gitHubInternal;
  }

  set setGitHub(gitHub) {
    this.gitHubInternal = gitHub;
  }

  get getMail() {
    return this.mailInternal;
  }

  set setMail(mail) {
    this.mailInternal = mail;
  }

  get getResume() {
    return this.resumeInternal;
  }

  set setResume(resume) {
    this.resumeInternal = resume;
  }
}

const Board = () => {
  const members = [
    new Person(
      "Carlos Negron",
      "Presidente",
      null,
      null,
      null,
      "cnegron6786@interbayamon.edu",
      null
    ),
    new Person(
      "Crystal Mercado",
      "Vicepresidenta",
      VicePresident,
      "https://www.linkedin.com/in/crystal-mercado/",
      null,
      "cmercado7908@interbayamon.edu",
      CrystalResume
    ),
    new Person(
      "Graciela Torres",
      "Tesorera",
      Vocal03,
      "https://www.linkedin.com/in/graciela-t-3608b1294/",
      null,
      "GTORRES7717@INTERBAYAMON.EDU",
      null
    ),
    new Person(
      "Aurelis Otero",
      "Secretaria",
      Vocal02,
      "https://www.linkedin.com/in/aurelis-otero-02348428a/",
      null,
      "AOTERO6640@INTERBAYAMON.EDU",
      AurelisResume
    ),
    new Person(
      "Nordiel Martinez",
      "Vocal",
      Vocal01,
      "https://www.linkedin.com/in/nordielmartinez/",
      "https://github.com/nordiel",
      "nmartinez1418@interbayamon.edu",
      NordielResume
    ),
    new Person(
      "Luis Martinez",
      "Vocal",
      Vocal06,
      "https://www.linkedin.com/in/luis-diego-mart%C3%ADnez-ortiz-642466310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      null,
      "Luisdmartinezortiz@gmail.com",
      LuisResume
    ),
    new Person(
      "Yaniel Molina",
      "Vocal",
      Vocal05,
      "https://www.linkedin.com/in/yaniel-molina-238026303/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      null,
      "Ymolina7845@interbayamon.edu",
      YanielResume
    ),
    new Person(
      "Diego Aguayo",
      "Vocal",
      Vocal07,
      "https://www.linkedin.com/in/diego-d-aguayo-rivera-4a24a6280/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      null,
      "diegoaguayorivera@gmail.com",
      DiegoResume
    ),
    new Person(
      "Axel Algarin",
      "Vocal",
      Vocal04,
      "https://www.linkedin.com/in/axel-algar%C3%ADn-5535552a6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      null,
      "axelalgarin405@gmail.com",
      null
    ),

    new Person(
      "Hacniel Cardona",
      "Mentor",
      Mentor,
      "https://www.linkedin.com/in/hacniel-cardona-2106a1135/",
      null,
      "hcardona@bayamon.inter.edu",
      null
    ),
    new Person(
      "Jose Rodriguez",
      "Director",
      Director,
      "https://www.linkedin.com/in/josearodriguezortega/",
      null,
      "jarodriguez@bayamon.inter.edu",
      null
    ),
  ];

  const MemberCards = ({ name, role, img, linkedin, gitHub, mail, resume }) => {
    if (img == null) img = Default;
    //Replacing the spaces with _ when saving the file
    const resumeName = name.replace(" ", "_");
    return (
      <div className="flex flex-col items-center pb-10 pt-10 border-3 border-white">
        {/* Image */}
        <img
          className="w-35 h-35 object-cover rounded-full shadow-lg"
          src={img}
          alt={`Image of ${role} ${name}`}
        />
        {/* Name */}
        <h5 className="mb-1 text-xl font-medium text-white text-center">
          {name}
        </h5>
        {/* Role */}
        <span className="text-sm text-gray-500">{role}</span>
        {/* Links */}
        <div className="flex gap-5 pt-5">
          {gitHub && (
            <a href={gitHub} target="_blank">
              <GithubIcon color="white" />
            </a>
          )}

          {linkedin && (
            <a href={linkedin} target="_blank">
              <LinkedinIcon color="white" />
            </a>
          )}
          {mail && (
            <a href={`mailto:${mail}`} target="_blank">
              <Mail color="white" />
            </a>
          )}

          {resume && (
            <a href={resume} target="_blank">
              <FileTextIcon color="white" />
            </a>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <NavBar />
      <div className="flex justify-center fadeInUp-animation">
        <div
          className="md:w-full
                                sm:w-110
                                w-60
                                max-w-7xl
                                grid grid-cols-1 
                                sm:grid-cols-2 
                                md:grid-cols-3 
                                lg:grid-cols-4 
                                xl:grid-cols-5 
                                gap-6 
                                p-4
                                "
        >
          {members.map((element) => (
            <MemberCards
              key={element.getName}
              name={element.getName}
              role={element.getRole}
              img={element.getImg}
              linkedin={element.getLinkedin}
              gitHub={element.getGitHub}
              mail={element.getMail}
              resume={element.getResume}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Board;
