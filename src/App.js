import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateContainer } from "./components/CreateContainer";
import {AnimatePresence} from "framer-motion"

import {Header} from "./components/Header"
import { MainContainer } from "./components/MainContainer";





function App() {
  return (
<AnimatePresence mode='wait'>
     <div className="w-screen h-auto flex flex-col bg-primary">
     <Header />

     <main className="mt-24 p-8 w-full ">
     <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
      </main>
     </div>
     </AnimatePresence>
   
  );
}

export default App;