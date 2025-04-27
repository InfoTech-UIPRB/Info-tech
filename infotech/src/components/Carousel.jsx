import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({images})=>{
    const [image, setImage] = useState(0);
    useEffect(() => {
        const changeSlide = setInterval(() => setImage(prevState => (prevState - 1 < 0) ? prevState = images.length-1 : prevState -1), 4000)
        return () => clearInterval(changeSlide)
    }, [])
    return (
        <>
            {/* {images.map((path) => {
                return (
                    <CarouselItem imagePath={path.image}/>
                );
            })} */}
                    <CarouselItem imagePath={images[image].image}/>
        </>
    );
}

export default Carousel;