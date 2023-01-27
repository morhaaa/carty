import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#070818] w-full text-white  px-10 md:px-28 lg:px-12 flex flex-col">
      <div className="flex flex-col gap-10 lg:gap-4 lg:justify-evenly  items-center lg:flex-row border-y-2 border-zinc-700 px-4 py-10 lg:py-24">
        <div className="hidden lg:inline-flex flex-col items-center lg:items-start">
          {" "}
          <h2 className="text-7xl text-transparent bg-clip-text font-extrabold bg-gradient-to-tr from-gray-500 via-slate-200 to-gray-700 py-1">
            Carty.{" "}
          </h2>
          <p className="text-sm font-thin text-zinc-300">
            A new way to make the payments easy, <br />
            reliable and secure.
          </p>
        </div>

        <div className="flex gap-8 md:gap-24 lg:gap-10">
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm md:text-md pb-2">
              Useful links
            </h3>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer py-1">
              Content
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer">
              Explore
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer py-1">
              Partners
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer">
              Terms & Services
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm md:text-md pb-2">Community</h3>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer py-1">
              Help Center
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer">
              Blog
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer py-1">
              Connect
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer">
              Suggestions
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm md:text-md pb-2">Partners</h3>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer py-1">
              Our Partners
            </p>
            <p className="text-xs md:text-sm text-zinc-300 cursor-pointer">
              Become a Partner
            </p>
          </div>
        </div>

        <div className="bg-black border-2 border-zinc-700 rounded-xl py-5 px-6">
          <h3 className="text-sm font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="flex py-2">
            <input
              className="rounded-lg px-3 md:w-64 text-gray-800 bg-zinc-300"
              type="text"
              placeholder="example@email.com"
            />
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg py-1 px-3 font-medium whitespace-nowrap ml-2">
              Sign Up
            </button>
          </div>
          <p className="text-sm font-thin text-zinc-300">
            Product updates, news and promotions. No spam ever.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 items-center mx-4 my-4">
        <div className="flex text-xs md:text-sm text-zinc-400 font-thin gap-4">
          <p>Copyright © 2022 Carty </p>
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
        <div className="flex gap-6">
          <AiFillInstagram size={22} className="cursor-pointer" />
          <AiFillLinkedin size={22} className="cursor-pointer" />
          <AiFillFacebook size={22} className="cursor-pointer" />
          <AiFillTwitterCircle size={22} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
