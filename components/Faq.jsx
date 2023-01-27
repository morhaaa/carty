import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <div className="bg-[#070818] w-full text-center py-8 lg:py-14">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-100">
        FAQ
      </h1>
      <div className="flex flex-col gap-4 text-white py-6 text-left mx-6">
        <div
          className="border-2 border-zinc-800 rounded-3xl py-4 px-6"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-xl font-semibold py-3">How do I pay?</h3>
            <AiOutlinePlus
              size={32}
              className={
                isOpen1
                  ? "transition-transform rotate-45"
                  : "transition-transform "
              }
            />
          </div>

          {isOpen1 && (
            <p className=" animate-opacity text-sm border-t-2 border-zinc-800 py-3">
              You can purchase a Pro subscription anytime with a credit card.
              Or, you can purchase an annual plan with PayPal that will not
              auto-renew.
            </p>
          )}
        </div>

        <div
          className="border-2 border-zinc-800 rounded-3xl py-4 px-6"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-xl font-semibold py-3">What is contactless?</h3>
            <AiOutlinePlus
              size={32}
              className={
                isOpen2
                  ? "transition-transform rotate-45"
                  : "transition-transform "
              }
            />{" "}
          </div>
          {isOpen2 && (
            <p className=" animate-opacity text-sm border-t-2 border-zinc-800 py-3">
              Contactless is like having exact change wherever you go. A simple
              tap of your card, key fob or smart phone is all it takes to pay at
              checkout. Why should I use contactless? There are many benefits to
              contactless payments: you don't have to worry about carrying
              around cash or fishing for coins. You're in control because your
              contactless-enabled card or device never leaves your hand at
              checkout. You get better record-keeping of all your purchases than
              you do when using cash. It's fast and ideal at places where speed
              is essential, like stadiums, fast food restaurants, gas stations
              and more.
            </p>
          )}
        </div>

        <div
          className="border-2 border-zinc-800 rounded-3xl py-4 px-6"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-xl font-semibold py-3">
              Where get foreign currency?
            </h3>
            <AiOutlinePlus
              size={32}
              className={
                isOpen3
                  ? "transition-transform rotate-45"
                  : "transition-transform "
              }
            />
          </div>
          {isOpen3 && (
            <p className="animate-opacity text-sm border-t-2 border-zinc-800 py-3">
              The best place to get foreign currency is usually at your
              destination, not at home. At home, financial institutions have
              paid for transporting, securing and storing that foreign
              currency–– and those costs are passed on to you. Only exchange
              enough money at home to pay for cabs, snacks and tips upon
              arrival. ATMs are conveniently located at most airports and at
              major tourist destinations, as well as many other places. Use your
              bank’s ATM Finder app
            </p>
          )}
        </div>

        <div
          className="border-2 border-zinc-800 rounded-3xl py-4 px-6"
          onClick={() => setIsOpen4(!isOpen4)}
        >
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-xl font-semibold py-3">
              How are paid plans billed?
            </h3>
            <AiOutlinePlus
              size={32}
              className={
                isOpen4
                  ? "transition-transform rotate-45"
                  : "transition-transform "
              }
            />
          </div>
          {isOpen4 && (
            <p className=" animate-opacity text-sm border-t-2 border-zinc-800 py-3">
              Paid plans are billed both at a Site and Team level. Both
              subscriptions are always linked to the email of the purchaser. In
              order to get extra features and faster loading time to your site,
              you can acquire any of our site plans. In the moment of purchasing
              the first site plan within a team, a Team account will be added
              automatically so editors will be charged at a team level.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default faq;
