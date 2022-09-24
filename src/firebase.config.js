import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA2uxA-oNVs5mdhobMGtyU2wGmxx5KG0z0",
    authDomain: "menu-d0d09.firebaseapp.com",
    databaseURL: "https://menu-d0d09-default-rtdb.firebaseio.com",
    projectId: "menu-d0d09",
    storageBucket: "menu-d0d09.appspot.com",
    messagingSenderId: "995389623641",
    appId: "1:995389623641:web:d1033e27000f5451649048"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };