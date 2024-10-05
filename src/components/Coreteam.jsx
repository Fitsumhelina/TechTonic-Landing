import React from "react";

const Coreteam = ({ title, description, imageUrl }) => {
  return (
    <div className="relative group duration-500 cursor-pointer overflow-hidden relative text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700">
      <div
        className="w-56 h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="flex flex-row justify-between">
          {/* You can add any other content inside this div */}
        </div>
      </div>

      {/* Info container */}
      <div className="absolute bg-gray-50 -bottom-24 w-50 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-blue-400 font-bold text-xs">Core Team</span>
        <span className="text-gray-800 font-bold text-3xl">{title}</span>
        <p className="text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default Coreteam;
