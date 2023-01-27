import { HiDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Prova from "../public/prova.png";

const Banner = () => {
  const { ref: ref1, inView: view1 } = useInView({
    threshold: 0.92,
  });
  console.log(view1);

  return (
    <div
      ref={ref1}
      className={
        view1
          ? "h-screen w-screen justify-center items-center gap-8  flex md:flex-row flex-col transition ease-in duration-300"
          : " blur-sm transition ease-in duration-1000 h-screen w-screen justify-center items-center gap-8  flex md:flex-row flex-col"
      }
    >
      <div className="animate-opacity2 mx-10 flex flex-col justify-center items-center md:items-start">
        <h1 className="py-2 text-6xl md:text-6xl lg:text-9xl text-transparent bg-clip-text font-extrabold bg-gradient-to-tr from-gray-500 via-slate-200 to-gray-700">
          Carty.
        </h1>
        <div className="py-2 lg:py-3  mx-2 flex flex-col justify-center items-center  md:items-start">
          <h2 className="text-gray-200 text-2xl md:text-2xl lg:text-4xl font-bold ">
            Digitalize your money
          </h2>
          <p className="text-gray-200 py-2">
            Money should be easy. It's time to say goodbye to banks & financial
            services that don't work for you.
          </p>
        </div>

        <div className=" py-2 md:py-2  flex flex-col sm:flex-row  gap-5 sm:gap-3">
          <button className="w-48 lg:w-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white lg:text-lg text-md font-semibold   md:px-6 lg:px-10 py-2  rounded-full flex  justify-center items-center hover:scale-110 transform transition duration-300 ease-out">
            <HiDevicePhoneMobile size={22} className="mx-1" />
            <p className="mx-1"> Get the App </p>
          </button>
          <button className="w-48 lg:w-64 bg-black text-white font-semibold lg:text-lg text-md  px-3  md:px-6 lg:px-10 py-2   border-2 border-gray-700 opacity-70 rounded-full flex justify-center  items-center hover:scale-110 transform transition duration-300 ease-out">
            <HiOutlineCreditCard size={22} className="lg:mx-1" />
            <p className="mx-1"> Digitalize Now</p>
          </button>
        </div>
      </div>

      <div className="mx-10 md:mx-2 ">
        <Image src={Prova} alt="cards" className=" animate-skew  min-w-64 " />
      </div>
    </div>
  );
};

export default Banner;
