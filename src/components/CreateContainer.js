import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdMoney,
} from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, saveItem } from "../utils/firebaseFunctions";

import { useDispatch, useSelector } from "react-redux";
import { setFoodItems } from "../redux/foodSlice";
export const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imgAsset, setImgAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [{ foodItems }, dispatch] = useStateValue();
  const dispatch = useDispatch();
  const foodItems = useSelector((s) => s.Food.foodItems);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];

    const storageRef = ref(storage, `Images/${uuidv4()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgres =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("el chgidem angleren inch grem");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Img uploaded");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imgAsset);
    deleteObject(deleteRef).then(() => {
      setImgAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Img uploaded");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
        // setIsLoading(false)
      }, 4000);
    });
  };

  const saveDetalies = () => {
    setIsLoading(true);
    try {
      if (!title || !calories || !imgAsset || !price || !category) {
        setFields(true);
        setMsg("can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${uuidv4()}`,
          title: title,
          imageURL: imgAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
          clearData();
          // setIsLoading(false)
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Uploading error");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImgAsset(null);
    setPrice("");
    setCalories("Select Category");
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(setFoodItems(data));
    });
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-x1 text-gray-700" />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400
            text-textColor
           "
          />
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer "
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base
              border-0
              outline-none capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
          <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!imgAsset ? (
                  <>
                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2">
                      <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                        <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                        <p className="text-gray-500 hover:text-gray-700">
                          Click her to uppload
                        </p>
                      </div>
                      <input
                        type="file"
                        name="uploadingimage"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      ></input>
                    </label>
                  </>
                ) : (
                  <>
                    <div className="relativ h-full">
                      <img
                        src={imgAsset}
                        alt="uploaded image"
                        className="w-full h-full object-cover "
                      />
                      <button
                        type="button "
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                        onClick={deleteImage}
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray delay-700 text-2xl" />
            <input
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent outline-none
                   border-none placeholder:text-gray-400
                   "
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdMoney className="text-gray delay-700 text-2xl" />
            <input
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none
                   border-none placeholder:text-gray-400 "
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="m1-0 md:m1-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetalies}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
