// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa4l5hbCGQupKgTB9m3pHaeTR8Bt4ACSs",
  authDomain: "react-native-todo-app-ea283.firebaseapp.com",
  projectId: "react-native-todo-app-ea283",
  storageBucket: "react-native-todo-app-ea283.appspot.com",
  messagingSenderId: "576506665085",
  appId: "1:576506665085:web:f1ccbf9b978c4128dbf914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;