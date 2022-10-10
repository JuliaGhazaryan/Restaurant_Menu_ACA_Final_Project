import React from "react";

import Girl from "../img/girl.jpg";

import { Link } from "react-router-dom";
const HomeConteiner = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 grap-2 w-full"
      id="home"
    >
      <div className="py-6 flex-1 flex flex-col items-start md:items-center justify-center">
        <p className=" text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          Food Delivery Services in{" "}
          <span className="text-[3rem] lg:text-[5rem] text-green-600">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Craving some delicious food? Maybe you’re in the mood for a juicy
          steak? <br /> No matter what kind of meal you have in mind, we are
          ready to prepare it for you.
        </p>
        <button
          type="button"
          className="mt-4 ring-2 ring-black w-full md:w-auto
               px-4 py-2 rounded-lg
               hover:bg-green-500 text-16px   text-green-500 hover:text-black"
        >
          <Link to={"/Menu"}>Order Now</Link>
        </button>
      </div>

      <div className="py-2  flex-1 flex  flex-nowrap items-center relative">
        <img src={Girl} alt="hero-bg" />

        <div
          className="absolute  bottom-4 left-0 
         lg:px-32 py-4 gap-4 italic text-[1.5rem] font-bold tracking-wide text-green-500 "
        >
          Enjoy the pleasure of life
        </div>
      </div>
    </section>
  );
};

export default HomeConteiner;
