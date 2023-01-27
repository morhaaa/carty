import { useRouter } from "next/router";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <div className="z-50 fixed top-0 w-full">
      <nav className="lg:h-16 md:h-14 h-12  bg-black/40 backdrop-blur-3xl">
        <div className="flex h-full text-white text-sm md:text-lg lg:text-lg justify-between items-center md:mx-6 mx-2">
          <div className="md:hidden">
            <Hamburger size={18} onToggle={() => setIsOpen(!isOpen)} />
          </div>

          <div
            onClick={() => router.push("/")}
            className="hidden md:inline cursor-pointer text-2xl text-transparent bg-clip-text font-extrabold bg-gradient-to-tr from-gray-500 via-slate-200 to-gray-700"
          >
            Carty.
          </div>
          <div className="hidden md:inline-flex gap-8">
            <div
              onClick={() => router.push("/pricing")}
              className="cursor-pointer"
            >
              Pricing
            </div>
            <div
              onClick={() => router.push("about")}
              className="cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => router.push("/updates")}
              className="cursor-pointer"
            >
              Updates
            </div>
          </div>

          <button
            onClick={() => router.push("/signup")}
            className="cursor-pointer font-medium border-2 border-purple-600 rounded-xl px-4 py-1 hover:scale-105 active:scale-90 transform transition duration-300 ease-out"
          >
            SIGN UP
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="animate-header inline-flex md:hidden w-10/12 mx-2 my-2 flex-col gap-4 rounded-3xl bg-black/40 backdrop-blur-3xl p-6">
          <p
            onClick={() => router.push("/")}
            className="text-white font-medium text-xl cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => router.push("/pricing")}
            className="text-white font-medium text-xl cursor-pointer"
          >
            Pricing
          </p>
          <p
            onClick={() => router.push("/about")}
            className="text-white font-medium text-xl cursor-pointer"
          >
            Updates
          </p>
          <p
            onClick={() => router.push("/updates")}
            className="text-white font-medium text-xl cursor-pointer"
          >
            About Us
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
