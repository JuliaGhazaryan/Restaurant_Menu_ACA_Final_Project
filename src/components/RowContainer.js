import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
<<<<<<< HEAD
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
      <div
          ref={rowContainer}
          className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
              flag
                  ? "overflow-x-scroll scrollbar-none"
                  : "overflow-x-hidden flex-wrap justify-center"
          }`}
      >
        {data && data.length > 0 ? (
            data.map((item) => (
                <div
                    key={item?.id}
                    className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                >
                  <div className="w-full flex items-center justify-between">
                    <motion.div
                        className="w-40 h-40 -mt-8 drop-shadow-2xl"
                        whileHover={{ scale: 1.2 }}
                    >
                      <img
                          src={item?.imageURL}
                          alt=""
                          className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                        onClick={() => setItems([...cartItems, item])}
                    >
                      <MdShoppingBasket className="text-white" />
                    </motion.div>
                  </div>

                  <div className="w-full flex flex-col items-end justify-end -mt-8">
                    <p className="text-textColor font-semibold text-base md:text-lg">
                      {item?.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item?.calories} Calories
                    </p>
                    <div className="flex items-center gap-8">
                      <p className="text-lg text-headingColor font-semibold">
                        <span className="text-sm text-red-500">$</span> {item?.price}
                      </p>
                    </div>
                  </div>
                </div>
            ))
        ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <img src={NotFound} className="h-340" />
              <p className="text-xl text-headingColor font-semibold my-2">
                Items Not Available
              </p>
=======
  console.log(data);
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center grap-3 my-12 bg-rowBg scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            className="w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[340px] 
             bg-gray-100 rounded-lg p-2 my-12   backdrop-blur-lg hover:shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageURL ? item.imageURL : I6}
                alt=""
                className="w-40 -mt-8"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col  items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500 ">$</span>
                  {item?.price}
                </p>
              </div>
>>>>>>> 1e02d1f63202b2315753056c92c3342225024fb3
            </div>
        )}
      </div>
  );
};

export default RowContainer;
