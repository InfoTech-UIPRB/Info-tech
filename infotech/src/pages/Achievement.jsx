import React from "react";

//Components
import Card from "../components/Card.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

//Images
import PrimerLugarIHACK2025 from "../assets/Images/Primer_Lugar_IHACK_2025.png"
import PrimerLugarIHACK2024 from  "../assets/Images/IHack_First_Page.png";
import PrimerLugarUprBayamon from "../assets/Images/First_Place_Advance_UPR_.png"
import SegundoLugarUprBayamon from "../assets/Images/Second_Place_Principante_UPR.png"
import IsacaPrimerLugar from "../assets/Images/Isaca_img.png"
import JaneHacksPrimerLugar from "../assets/Images/First_Place_JaneHacks.png"
import BancoPopularPrimerLugar from "../assets/Images/First_Place_Copilot_Studio_Hackathon.png"
import BloombergPrimerLugarUprRioPiedras from "../assets/Images/Tercer_Lugar_Bloomberg_UPR_Rio_Piedras.png"

const Achievement = () => {
    return (
        <>
            <NavBar />
                <div className="flex justify-center flex-wrap mt-5 gap-5 fadeInUp-animation">
                    <Card title="Primer Lugar - IHack Inter American University Puerto Rico Bayamon"
                        img={PrimerLugarIHACK2025} />
                    <Card title="Primer lugar - ISACA IT Bowl Puerto Rico" 
                        img={IsacaPrimerLugar}/>
                    <Card title="Primer lugar - Caribbean Celebration of Women in Computing (CCWIC) and JaneHacks Hackathon UPR - Mayaguez" 
                        img={JaneHacksPrimerLugar} />
                    <Card title="Primer lugar - Microsoft and Banco Popular Copilot Studio Hackathon" 
                        img={BancoPopularPrimerLugar} />
                    <Card title="Segundo Lugar - Principantes Competencia Inter Universitaria de Programación UPR - Bayamon" 
                        img={SegundoLugarUprBayamon}/>
                    <Card title="Primer Lugar IHack Inter American University Puerto Rico Bayamon"
                        img={PrimerLugarIHACK2024} />
                    <Card title="Primer Lugar - Avanzado Competencia Inter Universitaria de Programación UPR- Bayamon" 
                        img={PrimerLugarUprBayamon} />
                    <Card title="Tercer Lugar - BloomberUPR - Rio Piedras"
                        img={BloombergPrimerLugarUprRioPiedras} />
                </div>
            <Footer />
        </>

    )
}

export default  Achievement;