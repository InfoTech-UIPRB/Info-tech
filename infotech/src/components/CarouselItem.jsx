import React from "react";

const CarouselItem = ({imagePath, fade}) => {
    return (
        <img 
            src={imagePath} 
            alt="image" 
            className= {
                `absolute
                 inset-0
                 w-full 
                 h-full 
                 object-cover 
                 transition-opacity 
                 duration-500 
                 ease-in-out 
                 ${fade ? "opacity-100": "opacity-0"}`
            } />
    )
}

export default CarouselItem;