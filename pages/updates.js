import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Bg from "../public/wallpaper5.jpg";

const updates = () => {
  return (
    <div>
      <Head>
        <title>Updates</title>
        <meta name="description" content="carty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />{" "}
      <div className="relative h-screen w-screen">
        <Image
          src={Bg}
          alt="background"
          fill
          unoptimized="true"
          className="z-0 object-cover"
        />
        <div className="relative z-20 h-full py-20 md:py-28 w-full flex flex-col gap-14 justify-center items-center ">
          <h1 className="animate-opacity1 font-bold text-6xl md:text-7xl text-black text-center">
            {" "}
            Updates
          </h1>{" "}
          <div className="animate-opacity2 p-4 md:p-8 rounded-2xl bg-gray-600 bg-opacity-50 backdrop-blur-2xl flex flex-col text-center md:text-start items-center md:items-start gap-2 hover:drop-shadow-2xl ">
            <h3 className=" text-white md:text-lg font-medium ">
              Stay connected with us. Subscribe to our newsletter:
            </h3>
            <div className="flex flex-row gap-1 md:gap-3 ">
              <input
                type="text"
                className=" w-60 md:w-96 rounded-2xl bg-gray-200 px-3 py-1"
                placeholder="insert your email"
              />
              <button className="text-white font-medium bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-2xl px-1 md:px-2 py-1 hover:scale-105 transform transition duration-300 ease-out">
                SUBSCRIBE
              </button>
            </div>
            <i className="text-white font-thin text-sm">
              Product updates, news and promotions. No spam ever.
            </i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default updates;
