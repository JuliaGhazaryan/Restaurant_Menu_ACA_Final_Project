import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CreateContainer } from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";

import { Header } from "./components/Header";
import MainContainer from "./components/MainContainer";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import MenuContainer from "./components/MenuContainer";
import {useDispatch, useSelector} from "react-redux";
import {setFoodItems} from "../src/redux/foodSlice"

function App() {
 // const [{ foodItems }, dispatch] = useStateValue();
 const dispatch = useDispatch();
 const foodItems = useSelector(state => state.Food.foodItems)

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data)
      dispatch(setFoodItems(data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-16 md:mt-16 p-8 w-full ">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/Menu" element={<MenuContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
