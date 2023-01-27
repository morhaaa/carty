import Airbnb from "../public/company-airbnb.svg";
import Apple from "../public/company-apple.svg";
import Google from "../public/company-google.svg";
import Facebook from "../public/company-facebook.svg";
import Image from "next/image";
import { BsShield } from "react-icons/bs";
import { BsLightning } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const SecondPart = () => {
  const { ref: ref1, inView: view1 } = useInView({
    threshold: 0.25,
  });
  const { ref: ref2, inView: view2 } = useInView({
    threshold: 1,
  });

  return (
    <div ref={ref1} className="h-100 bg-[#070818] z-10 w-full z-99 ">
      <div className="flex flex-col h-full justify-between items-center py-16 lg:py-20 px-10 lg:px-16  text-white text-center gap-8 md:gap-10 lg:gap-14 ">
        <p
          className={
            view1
              ? " md:text-4xl font-bold transition ease-in duration-200 "
              : " opacity-0 md:text-4xl font-bold transition ease-in duration-200"
          }
        >
          Trusted by +8000 companies worldwide
        </p>
        <p
          className={
            view1
              ? "opacity-1 delay-150 transition ease-in duration-400 text-xs md:text-sm"
              : "opacity-0 blur-sm transition ease-in duration-400 text-xs md:text-sm "
          }
        >
          Many teams choose My card as payment method. Easily and securely
          spend, send, and manage your transactions all in one place
        </p>{" "}
        <div
          ref={ref2}
          className="flex flex-wrap justify-center lg:gap-14 items-center w-full md:gap-6 gap-4"
        >
          <Image
            src={Airbnb}
            alt="AirbnbLogo"
            className={
              view2
                ? "w-16 sm:w-24 h-auto md:w-40 opacity-1 delay-300 transition ease-in duration-700"
                : "w-16 sm:w-24 h-auto md:w-40 opacity-0 blur-sm transition ease-in duration-400"
            }
          />
          <Image
            src={Facebook}
            alt="FacebookLogo"
            className={
              view2
                ? "w-16 sm:w-24 h-auto md:w-40 opacity-1 delay-300 transition ease-in duration-700"
                : "w-16 sm:w-24 h-auto md:w-40 opacity-0 blur-sm transition ease-in duration-400"
            }
          />
          <Image
            src={Apple}
            alt="AppleLogo"
            className={
              view2
                ? "w-auto sm:h-8 md:h-10 h-6 opacity-1 delay-300 transition ease-in duration-700"
                : "w-auto sm:h-8 md:h-10 h-6 opacity-0 blur-sm transition ease-in duration-400 "
            }
          />
          <Image
            src={Google}
            alt="GoogleLogo"
            className={
              view2
                ? "w-16 sm:w-24 h-auto md:w-36 opacity-1 delay-300 transition ease-in duration-700"
                : "w-16 sm:w-24 h-auto md:w-36 opacity-0 blur-sm transition ease-in duration-400"
            }
          />
        </div>
        <div className="border-2 opacity-10 w-1/4"></div>
        <p className=" pt-6 text-md md:text-xl font-semibold ">
          Best features provided by Carty
        </p>
        <div className="flex lg:flex-row flex-col w-full lg:w-9/12 justify-center gap-6  lg:gap-12 ">
          <div
            className=" flex flex-col items-center md:gap-2 w-full h-full  p-2 bg-black border-2 border-gray-800 opacity-60 rounded-2xl hover:scale-110 transform transition duration-300 ease-out
          hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:opacity-100"
          >
            <p className="font-bold md:text-base text-sm">Protection</p>
            <BsShield size={50} className="scale-50 md:scale-100" />
            <p className="text-xs md:text-sm">Data Protection Guarantee</p>
          </div>
          <div
            className="flex flex-col items-center md:gap-2 w-full h-full p-2 bg-black border-2 border-gray-800 opacity-60 rounded-2xl hover:scale-110 transform transition duration-300 ease-out
          hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:opacity-100"
          >
            <p className="font-bold md:text-base text-sm">Tracking</p>
            <BsLightning size={50} className="scale-50 md:scale-100" />
            <p className="text-xs md:text-sm">
              Track all you financial transactions
            </p>
          </div>
          <div
            className="flex flex-col items-center md:gap-2 w-full h-full p-2 bg-black border-2 border-gray-800 opacity-60 rounded-2xl hover:scale-110 transform transition duration-300 ease-out
          hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:opacity-100"
          >
            <p className="font-bold md:text-base text-sm">Flexibility</p>
            <BsTruck size={50} className="scale-50 md:scale-100" />
            <p className="text-xs md:text-sm">
              {" "}
              Delivery through multiples channels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
