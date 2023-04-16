import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  // apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
  // authDomain: "olx-sijeesh.firebaseapp.com",
  // projectId: "olx-sijeesh",
  // storageBucket: "olx-sijeesh.appspot.com",
  // messagingSenderId: "767411886432",
  // appId: "1:767411886432:web:2ef6862afc88f2c423a605",
  // measurementId: "G-4ELNR9DJHL"
  apiKey: "AIzaSyAe0WEsA8c-I_FSRG0vxUZXUDqr4l5vQSA",
  authDomain: "founder-investor.firebaseapp.com",
  projectId: "founder-investor",
  storageBucket: "founder-investor.appspot.com",
  messagingSenderId: "447408395239",
  appId: "1:447408395239:web:4cf6c314cb57354a95e342",
  measurementId: "G-Q410T7ENWH",
};

export const Firebase = firebase.initializeApp(firebaseConfig); //named export
