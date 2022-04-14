// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOAtJXwQzwrTly9rD9Bv8uZlEk-dJlxOk",
    authDomain: "motor-services-23e07.firebaseapp.com",
    projectId: "motor-services-23e07",
    storageBucket: "motor-services-23e07.appspot.com",
    messagingSenderId: "972578267241",
    appId: "1:972578267241:web:051073013936236deec2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;