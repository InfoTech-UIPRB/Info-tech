/* eslint-disable no-unused-vars */
import React from "react";
const Card = ({text, title, img, alt}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-white border-2">
            <div className="flex justify-center p-5 w-full h-116">
                <img className="object-cover" src={img} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-white text-lg mb-2">{title}</div>
                <p className="text-white text-base">
                {text}
                </p>
            </div>
        </div>
    );
}

export default Card;