import { initializeApp } from "firebase/app";
import "@firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLyGQQPlhh-HePUaJXjLg57yG-M7UV6lQ",
  authDomain: "fetan-rn.firebaseapp.com",
  projectId: "fetan-rn",
  storageBucket: "fetan-rn.appspot.com",
  messagingSenderId: "317418140281",
  appId: "1:317418140281:web:e951d05e70f245f4605aa8",
  measurementId: "G-3CZMSG34SF",
};

const app = initializeApp(firebaseConfig);
export default firebase;
