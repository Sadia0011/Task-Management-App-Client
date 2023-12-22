// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCawCqBC4QI_HCWXVAmNLZlpbhtTdj-cT8",
  authDomain: "task-bd435.firebaseapp.com",
  projectId: "task-bd435",
  storageBucket: "task-bd435.appspot.com",
  messagingSenderId: "644069559248",
  appId: "1:644069559248:web:3a060c9d451de73c99c7d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;