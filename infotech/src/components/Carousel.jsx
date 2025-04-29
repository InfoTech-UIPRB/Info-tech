import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({images})=>{
    const [image, setImage] = useState(0);
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const changeSlide = setInterval(() => {
            // Is set to false for starting the fade out
            setFade(false)

            setTimeout(() => {
                setImage(prevState => (prevState + 1 >= images.length) ? prevState = 0 : prevState + 1)
                setFade(true)
            }, 300)

        }, 4000)
        return () => clearInterval(changeSlide)
    }, [images.length])

    return (

            <div className= {`w-[100vh] h-[50vh]`}>
                        <CarouselItem imagePath={images[image].image} fade={fade}/>
            </div>

    );
}

export default Carousel;