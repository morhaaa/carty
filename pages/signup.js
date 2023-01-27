import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Bg from "../public/wallpaper6.jpg";
import { Parallax } from "react-scroll-parallax";

const signup = () => {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="carty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="  relative h-full w-screen">
        <Image
          src={Bg}
          alt="background"
          unoptimized="true"
          fill
          className="z-0 object-cover"
        />
        <Parallax speed={-30}>
          <div className="h-screen flex items-center justify-center">
            <div className="animate-opacity2   md:py-16 py-10 px-6 md:px-10 w-[330px] md:w-[500px] rounded-3xl bg-black bg-opacity-20 backdrop-blur-3xl flex flex-col text-center items-center gap-2 md:gap-4 hover:drop-shadow-2xl ">
              <h1 className="text-white font-semibold text-3xl md:text-5xl">
                Sign up
              </h1>
              <p className="text-white font-thin md:text-2xl py-2 md:py-4">
                Access to our services
              </p>
              <input
                className="w-full py-2 px-2 rounded-lg md:text-lg"
                placeholder="Email"
              />
              <input
                className="w-full py-2 px-2 rounded-lg md:text-lg"
                placeholder="Password"
              />
              <button className="w-full text-white bg-indigo-500 rounded-lg py-2 px-2 md:text-lg font-medium hover:saturate-200">
                Sign up
              </button>

              <p className="text-white font-thin text-xs md:text-sm py-2 md:py-4">
                By clicking on Sign up, you agree to our Terms of service and
                Privacy policy.
              </p>
            </div>
          </div>
        </Parallax>{" "}
        <Parallax speed={10}>
          <Footer />
        </Parallax>
      </div>
    </div>
  );
};

export default signup;
