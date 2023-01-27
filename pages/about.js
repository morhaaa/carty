import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Bg from "../public/wallpaper2.jpg";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="carty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <Header />{" "}
      <div className="relative h-full w-screen">
        <Image
          src={Bg}
          alt="background"
          fill
          unoptimized="true"
          className="z-0 object-cover"
        />
        <div className="relative z-20 h-full py-20 md:py-28 w-full flex flex-col gap-14 justify-center items-center ">
          <h1 className="animate-opacity1 font-bold text-6xl md:text-7xl text-white text-center">
            {" "}
            About Us
          </h1>{" "}
          <div className="animate-opacity2 p-4 md:p-8 rounded-2xl w-[600px] bg-gray-600 bg-opacity-50 backdrop-blur-2xl flex flex-col text-center md:text-start items-center md:items-start gap-2 hover:drop-shadow-2xl ">
            <h3 className=" text-white md:text-3xl font-medium ">
              Carty Story
            </h3>
            <i className=" text-white">
              Carty was launched in 2011 with the vision of making international
              money transfers cheap, fair, and simple. Today, our multi-currency
              account helps millions of people and businesses manage their money
              across the world. Here’s how we got here.
            </i>

            <h3 className=" text-white md:text-3xl font-medium py-2">
              Carty Today
            </h3>
            <i className=" text-white">
              Carty today. Our name may have changed but the heart of what we do
              is always the same: helping people manage their money
              internationally more cheaply, quickly, and transparently. Millions
              of people and businesses trust us to move their money, saving them
              bank fees and time. With the Wise account, they hold balances in
              over 50 currencies, and use our debit card to shop and spend while
              abroad. We’ve partnered with banks and companies like Monzo, Bolt,
              and GoCardless, to bring their customers better international
              banking. And people like Richard Branson, and PayPal co-founder
              Max Levchin, among others, have invested in our vision.
            </i>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default about;
