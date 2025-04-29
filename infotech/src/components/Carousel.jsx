import React, { useEffect, useState } from "react";

const Carousel = ({images})=>{
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const changeSlide = setInterval(() => {
            // Is set to false for starting the fade out
            setFade(false)

            setTimeout(() => {
                setIndex(prevState => (prevState + 1 >= images.length) ? prevState = 0 : prevState + 1)
                setFade(true)
            }, 300)

        }, 4000)
        return () => clearInterval(changeSlide)
    }, [images.length])

    return (
        <div className="relative w-full md:w-3/4 lg:w-2/3 h-[60vh] mx-auto overflow-hidden rounded-lg">
          <img
            src={images[index].image}
            alt={`Slide ${index + 1}`}
            className={`
              absolute inset-0
              w-full h-full
              object-cover
              transition-opacity duration-500 ease-in-out
              ${fade ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>
      );
}

export default Carousel;