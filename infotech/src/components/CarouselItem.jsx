import React from "react";

const CarouselItem = ({imagePath}) => {
    return (
        <img className="mySlides absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100" src={imagePath} alt="image" />
    )
}

export default CarouselItem;