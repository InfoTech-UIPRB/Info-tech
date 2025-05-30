import React from "react";

//Components
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

//Images
import President from "../assets/PFP/chelimar-pfp.png"
import Nopfp from "../assets/PFP/nopfp.jpg"
import Vocal01 from "../assets/PFP/jeremy-pfp.jpg"
import Vocal04 from "../assets/PFP/nordiel-pfp.png"
import Vocal03 from "../assets/PFP/edwin-pfp.jpg"
import Vocal02 from "../assets/PFP/aurelis-pfp.png"

//Resumes
import EdwinResume from "../assets/Resumes/Edwin_Manuel_Vazquez_Vega_resume 2025.pdf"
import AurelisResume from "../assets/Resumes/Aurelis_Otero.pdf"

//Icons
import { GithubIcon, LinkedinIcon, Mail, FileTextIcon } from "lucide-react";

class Person{
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

const Directive = () => {

    const directives = [
        new Person("Chelimar Morales", "President", President, "https://www.linkedin.com/in/chelimar-morales/", null, null, null),
        new Person("Carlos Negron", "Vice President", null, null, null, "cnegron6786@interbayamon.edu", null),
        new Person("Josue Vazquez", "Tesorero", null, null, null, null, null),
        new Person("Jeremmy Leiva", "Vocal", Vocal01, "https://www.linkedin.com/in/jeremmy-leiva-aguilar-jem/", null, "jleiva2084@interbayamon.edu", null),
        new Person("Aurelis Otero", "Vocal", Vocal02, "https://www.linkedin.com/in/aurelis-otero-02348428a/", null, null, AurelisResume),
        new Person("Edwin Vazquez", "Vocal", Vocal03, "https://www.linkedin.com/in/edwin-vazquez-a8a208279/", "https://github.com/Revokeez", "edwinmvazquez1@gmail.com", EdwinResume),
        new Person("Nordiel Martinez", "Vocal", Vocal04, "https://www.linkedin.com/in/nordielmartinez/", "https://github.com/nordiel", null, null),
        new Person("Crystal Mercado", "Vocal", null, "https://www.linkedin.com/in/crystal-mercado/", null, "cmercado7908@interbayamon.edu", null),
        new Person("Hacniel Cardona", "Mentor", null, null, null, null, null),
        new Person("Jose Rodriguez", "Director", null, null, null, null, null)
    ];

    const MemberCards = ({name, role, img, linkedin, gitHub, mail, resume}) => {
        if(img == null) img = Nopfp
        //Replacing the spaces with _ when saving the file
        const resumeName = name.replace(" ", "_")
        return (
            <div className="flex flex-col items-center pb-10 pt-10 border-3 border-white">
                {/* Image */}
                <img className="w-35 h-35 object-cover rounded-full shadow-lg" src={img}
                     alt={`Image of ${role} ${name}`} />
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
                        <a href={resume} download={`${resumeName}_resume`} target="_blank">
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
                                max-w-7xl
                                grid grid-cols-1 
                                sm:grid-cols-2 
                                md:grid-cols-3 
                                lg:grid-cols-4 
                                xl:grid-cols-5 
                                gap-6 
                                p-4
                                ">
                      {directives.map((element) => (
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

    )
}

export default Directive;