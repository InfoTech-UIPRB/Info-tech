import React from "react";

const GroupList = ({information}) => {
    return (
        <div className="grid grid-flow-col-2 gap-4">
            {information.map((info, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow text-center">
                    <h3 className="text-xl font-bold">{info.title}</h3>
                    <p className="text-gray-400">{info.date}</p>
                </div>
            ))}
        </div>
    )
};

export default GroupList;