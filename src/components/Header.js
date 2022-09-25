import React, { useState } from "react";
import Logo from "../img/logo.jpg";
import { MdShoppingBasket } from "react-icons/md";
import Avatar from "../img/ava.jpg";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });

    //console.log(response)
  };

  return (
    <header className="fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16  bg-primary">
      {/* desktop & tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-13 h-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> Food World</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />

            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          {/* <button className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Login</button> */}

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
          </div>
        </div>
      </div>

      {/* //   mobile  */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};
