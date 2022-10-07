import React, { useEffect, useRef, useState } from "react";
import HomeConteiner from "./HomeConteiner";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  //const [{ foodItems }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
 const dispatch = useDispatch();
 const foodItems = useSelector(state => state.Food.foodItems)

  // useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeConteiner />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize text-headingColor relative before:absolute
           before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0
           before:bg-green-700 transition-all ease-in-out duration-100"
          >
            Our fresh & healty fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          foodItems={foodItems}
          data={foodItems?.filter((n) => n.category === "drinks")}
        />
      </section>
      <section className="w-full my-6">
        <MenuContainer />
      </section>
    </div>
  );
};
export default MainContainer;
