import React from "react";

//Components
import NavBar from "../components/NavBar.jsx";
import { Carousel } from "flowbite-react";

//Images
// import photo01 from "../assets/Images/Chelimar_dando_algo.jpg";
// import photo02 from "../assets/Images/Foto_de_Actividad_del_sum_con_director.jpg";
const SlideShow = () => {
    return (
        <Carousel>            
            <img src="Chelimar_dando_algo.jpg" alt="..." />
            <img src="Foto_de_Actividad_del_sum_con_director.jpg" alt="..." />

             {/*<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
        </Carousel>
    )
}

const HomePage = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <SlideShow />
        </div>
    )
}
 export default HomePage;