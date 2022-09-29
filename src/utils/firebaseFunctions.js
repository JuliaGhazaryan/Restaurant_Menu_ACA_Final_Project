import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import { db } from "../firebase.config";

import { v4 as uuidv4 } from "uuid";

// Saving new item
export const saveItem = async (data) => {
  await setDoc(doc(db, "foodItems", `${uuidv4()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(db, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
