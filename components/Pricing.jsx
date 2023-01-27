import React from "react";
import Image from "next/image";
import Card1 from "../public/card1.svg";
import Card2 from "../public/card2.svg";
import Card3 from "../public/card3.svg";

const Pricing = () => {
  return (
    <div className="bg-[#0A0A30] relative">
      <div className="h-full text-center py-20 flex flex-col w-screen justify-center items-center   gap-4 md:gap-10 ">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl py-5 font-medium text-gray-100">
            Ready to start?
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-medium  text-gray-100">
            Choose your plan
          </h2>
        </div>
        <div className="border-2 opacity-25 w-40"></div>
        <div className="relative flex flex-col md:flex-row py-4 px-2 md:gap-20 items-center overflow-x-scroll ">
          {" "}
          <Image
            src={Card1}
            alt="Price1"
            className="object-contain  scale-90 md:scale-100 cursor-pointer md:hover:scale-105 transform transition duration-300 ease-out"
          />
          <Image
            src={Card2}
            alt="Price2"
            className="object-contain scale-75 md:scale-100 cursor-pointer  md:hover:scale-105 transform transition duration-300 ease-out"
          />
          <Image
            src={Card3}
            alt="Price3"
            className="object-contain  scale-90 md:scale-100 cursor-pointer md:hover:scale-105 transform transition duration-300 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
