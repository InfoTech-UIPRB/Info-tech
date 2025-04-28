import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Directive = () => {

    const MemberCards = ({name, role, img}) => {
        return (
            <div className="flex flex-col items-center pb-10">
                <img className="w-48 h-48 object-cover rounded-full shadow-lg" src={img}
                     alt="Image of Directive Member" />
                <h5 className="mb-1 text-xl font-medium text-white text-center">{name}</h5>
                <span className="text-sm text-gray-500">{role}</span>
            </div>
        )
    }
    return (
        <>
            <NavBar />
            <div className="flex justify-center">
                <div
                    className="w-full
                               max-w-6xl
                               grid grid-cols-1 
                               sm:grid-cols-2 
                               md:grid-cols-3 
                               lg:grid-cols-4 
                               xl:grid-cols-5 
                               gap-6 
                               p-4 
                               fadeInUp-animation">

                    <MemberCards name="Chelimar Morales" role="President" />
                    <MemberCards name="Carlos Negron" role="Vice President"/>
                    <MemberCards name="Josue Vazquez" role="Tesorero" />
                    <MemberCards name="Angeli" role="Secretaria" />
                    <MemberCards name="Jeremmy Leiva" role="Vocal" />
                    <MemberCards name="Aurelis Otero" role="Vocal" />
                    <MemberCards name="Edwin Vazquez Vega" role="Vocal" />
                    <MemberCards name="Nordiel Martinez Cardona" role="Vocal" />
                    <MemberCards name="Crystal Mercado Ortiz" role="Vocal" />
                    <MemberCards name="Hacniel Cardona" role="Mentor" />
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Directive