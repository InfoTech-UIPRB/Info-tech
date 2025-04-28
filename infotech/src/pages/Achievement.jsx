import React from "react";

//Components
import Card from "../components/Card.jsx";
import NavBar from "../components/Navbar.jsx";

//Images
import PrimerLugarIHACK2025 from "../assets/Images/Primer_Lugar_IHACK_2025.png"
import PrimerLugarIHACK2024 from  "../assets/Images/IHack_First_Page.png";
import SegundoLugarUprBayamon from "../assets/Images/Second_Place_Principante_UPR.png"

const Achievement = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center flex-wrap mt-5 gap-5">
                <Card title="Primer Lugar IHack Inter American University Puerto Rico Bayamon"
                      img={PrimerLugarIHACK2025}/>
                <Card title="Primer Lugar IHack Inter American University Puerto Rico Bayamon"
                      img={PrimerLugarIHACK2024} />


            </div>

        </>

    )
}

export default  Achievement;