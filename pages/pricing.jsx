import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Bg from "../public/wallpaper4.jpg";
import Image from "next/image";
import Card1 from "../public/card1.svg";
import Card2 from "../public/card2.svg";
import Card3 from "../public/card3.svg";
import person1 from "../public/person1.jpg";
import person2 from "../public/person2.jpg";
import person3 from "../public/person3.jpg";
import person4 from "../public/person4.jpg";

const review = [
  {
    img: person3,
    name: "Rachel Nelson",
    work: "Web Developer",
    paragraph:
      "Love the ease of use and the ease of implementation/integration within other websites and platforms to capture payment.",
  },
  {
    img: person2,
    name: "Fabio Sasso",
    work: "Waiter",
    paragraph:
      "Carty program is very wonderful. The ease in depositing and withdrawing is very distinguished.",
  },
  {
    img: person1,
    name: "Kenny Chen",
    work: "Trader",
    paragraph:
      " it is easy to use in paying and most of all services giving a gift reward in every users.",
  },
  {
    img: person4,
    name: "Pablo Stanley",
    work: "Salesman",
    paragraph:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
];
const pricing = () => {
  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="carty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div className="relative h-full w-screen">
        <Image
          src={Bg}
          alt="background"
          fill
          unoptimized="true"
          className="z-0 object-cover"
        />
        <div className="relative z-20 h-full py-20 md:py-28 w-full flex flex-col gap-4 items-center text-center">
          <h1 className="animate-opacity1 font-bold text-6xl md:text-7xl text-black ">
            {" "}
            Pricing
          </h1>{" "}
          <p className="animate-opacity2  text-lg md:text-2xl font-medium">
            Choose a plan to digitalize your money
          </p>
          <div className="animate-opacity3 flex flex-col md:flex-row py-4 px-2 md:gap-10 items-center overflow-x-scroll">
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

      <div className=" h-full w-screen bg-[#440219] flex justify-center">
        <div className="flex flex-col gap-16 items-center text-center w-[680px] py-20">
          <h1 className="text-white font-semibold text-4xl">
            What people are saying about us
          </h1>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {review.map((item, index) => (
              <div
                key={index}
                className="border-2 rounded-2xl border-gray-600 flex flex-col text-start gap-3 md:h-[280px] w-80 p-5 "
              >
                <div className="relative h-10 w-10 rounded-full bg-white">
                  <Image
                    src={item.img}
                    alt="People"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-white text-xl font-medium">{item.name}</h3>
                <h4 className="text-white  text-lg">{item.work}</h4>
                <p className="text-white font-light text-md">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default pricing;
