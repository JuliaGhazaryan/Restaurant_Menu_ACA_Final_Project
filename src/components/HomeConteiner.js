import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
const HomeConteiner = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 grap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center">
        <div className="flex itms-center gap-2 justify-center  bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className=" text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          The Fastest Delivery in{" "}
          <span className="text-[3rem] lg:text-[5rem] text-orange-600">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          You can see our resturant menu here.We want to see your smile and
          happiness.You can order all delicous dishes,thet you whant here.
        </p>
        <button
          type="button"
          className="bg-orange-400 w-full md:w-auto
               px-4 py-2 rounded-lg
               hover:shadow-lg transition-all eas-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="py-2  flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="h-420 w-full lg:h-656 lg:w-auto ml-auto "
          alt="hero-bg"
        />
        <div
          className="w-full h-full absolute  top-0 left-0 flex justify-center items-center
         px-32 py-4 gap-4 flex-wrap shadow-lg "
        >
          {heroData.map((n) => {
            return (
              <div
                key={n.id}
                className="w-150 min-w-[150px]  p-2 bg-cardOverlay backdrop-blur-md 
             flex flex-col  items-center justify-center rounded-md "
              >
                <img
                  src={n.imageSrc}
                  className="w-40 -mt-10 object-contain"
                  alt="image"
                />
                <p className="text-base font-semibold text-textColor">
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
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeConteiner;
