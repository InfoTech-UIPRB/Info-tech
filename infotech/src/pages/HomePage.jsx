import React, { useState } from "react";

//Components


const HomePage = () => {

    const images = ["Chelimar_dando_algo.jpg", "Foto_de_Actividad_del_sum_con_director.jpg"]
    const [index, setIndex] = useState(0);
    const length = images.length;

    const previous = () => {
        const newIndex = index -1
        setIndex(newIndex < 0 ? length -1 : newIndex);
    }

    const next = () => {
        const newIndex = index + 1
        setIndex(newIndex >= length ? 0 : newIndex)
    }
    return (
        <div className="border-4">
            <button onClick={previous}>Previous </button>
            <button onClick={next}>Next</button>
            <img src={images[index]} />
        </div>
    )
}
 export default HomePage;