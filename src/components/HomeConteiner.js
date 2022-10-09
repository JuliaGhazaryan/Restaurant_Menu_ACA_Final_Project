import React from "react";
import Delivery from "../img/delivery.png";
// import HeroBg from "../img/heroBg.png";
import Girl from "../img/girl.jpg";
import { heroData } from "../utils/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HomeConteiner = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 grap-2 w-full"
      id="home"
    >
      <div className="py-6 flex-1 flex flex-col items-start md:items-center justify-center">
        <p className=" text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          The Fastest Delivery in{" "}
          <span className="text-[3rem] lg:text-[5rem] text-green-600">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          You can see our resturant menu here. We want to see your smile and
          happiness. You can order all delicious dishes, that you want here.
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
        {/* <div className="absolute mt-62">
          <p className=" text-[2.5rem] font-bold tracking-wide text-green-500 ">
            Fantastic Delicious fot you
          </p>
        </div> */}

        <img
          src={Girl}
          // className="h-420 w-full lg:h-656 lg:w-auto ml-auto "
          alt="hero-bg"
        />

        <div
          className="absolute  bottom-4 left-0 
         lg:px-32 py-4 gap-4 italic text-[2rem] font-bold tracking-wide text-green-500 "
        >
          Fantastic Delicious for you
          {/* {heroData.map((n) => {
            return (
              <div
                key={n.id}
                className="w-28 h-28   p-4  bg-cardOverlay backdrop-blur-md 
             flex flex-col  items-center justify-center rounded-md "
              >
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={n.imageSrc}
                  className="lg:w-24 w-10 -mt-10 "
                  alt="img"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor">
                  {n.name}
                </p>
                <p className="text-sm text-lighttextGray font-semibold">
                  {n.desp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-700">$</span>
                  {n.price}
                </p>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default HomeConteiner;
