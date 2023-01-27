import React from "react";
import Image from "next/image";
import Bg1 from "../public/wallpaper1.jpg";
import AppPhone from "../public/APP.png";
import Appstore from "../public/Appstore.png";
import Google from "../public/Google.png";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref: ref1, inView: view1 } = useInView({
    threshold: 0.25,
  });

  return (
    <div className="relative max-w-screen h-full">
      <Image
        src={Bg1}
        alt="Background"
        className="absolute z-0 object-cover min-h-screen min-w-screen"
      />

      <div
        ref={ref1}
        className="relative w-full text-center flex flex-col md:flex-row items-center  lg:px-10"
      >
        <div className="basis-1/2  m-auto h-screen flex flex-col justify-center items-center py-10 md:py-20 px-10">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium py-3 text-gray-100">
            Easily control directly on your Smartphone
          </h1>{" "}
          <h2 className="text-sm md:text-xl lg:text-2xl py-3 md:py-6 text-white">
            Send Money, Pay Bills, Exchange your assets with our App. Available
            on Apple Market and Android Market
          </h2>
          <div className="flex justify-center w-20 md:w-32 gap-8 ">
            <Image
              src={Appstore}
              alt="AppStore"
              className=" cursor-pointer hover:scale-110 transform transition duration-300 ease-out"
            />

            <Image
              src={Google}
              alt="GoogleStore"
              className=" cursor-pointer hover:scale-110 transform transition duration-300 ease-out"
            />
          </div>
        </div>
        <div
          className={
            view1
              ? "basis-1/2 transition ease-in duration-1000"
              : "basis-1/2 blur-3xl opacity-20 transition ease-in duration-200"
          }
        >
          <Image
            src={AppPhone}
            alt="AppPhone"
            className="object-contain max-h-96 md:max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
