// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseConfig = {
    apiKey: "AIzaSyBfZ0GypKzJr1HTPm_ertlN7SfHNyr78eo",
    authDomain: "netflix-react-js-54182.firebaseapp.com",
    projectId: "netflix-react-js-54182",
    storageBucket: "netflix-react-js-54182.appspot.com",
    messagingSenderId: "145712437606",
    appId: "1:145712437606:web:01920cfc02790db85750a7",
    measurementId: "G-8REPZCQ9SN"
  };



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);