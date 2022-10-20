import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { addCount, filterCart, removeCount } from "../redux/sliceCart";

const CartItem = ({ item, setFlag, flag }) => {
  const [qty, setQty] = useState(item.qty);
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.Cart.cartItems);
  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  useEffect(() => {
    cartDispatch();
  }, [cartItems]);
  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      dispatch(addCount(id));
      console.log(cartItems);

      cartItems.map((item) => {
        if (item.id === id) {
          setFlag(flag + 1);
        }
      });
      // cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty === 1) {
        dispatch(filterCart(id));

        setFlag(flag + 1);
        //cartDispatch();
      } else {
        setQty(qty - 1);
        dispatch(removeCount(id));
        //cartDispatch();
        cartItems.map((item) => {
          if (item.id === id) {
            setFlag(flag + 1);
          }
        });
        // cartDispatch();
      }
    }
  };

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
