// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB86cxdR5JKogMffm0GbdA9NlKdp3zlh5A",
  authDomain: "healthgpt-49e08.firebaseapp.com",
  projectId: "healthgpt-49e08",
  storageBucket: "healthgpt-49e08.appspot.com",
  messagingSenderId: "716352798787",
  appId: "1:716352798787:web:da3d7080c7f9aa8de5d4f6",
};
// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
