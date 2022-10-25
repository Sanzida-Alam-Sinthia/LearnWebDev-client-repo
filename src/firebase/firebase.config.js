// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK0JkGHzaKMVU_QjSAnmj8DRLJcktiNmo",
    authDomain: "learnng-platform-assignment.firebaseapp.com",
    projectId: "learnng-platform-assignment",
    storageBucket: "learnng-platform-assignment.appspot.com",
    messagingSenderId: "811109547319",
    appId: "1:811109547319:web:54087a3760900b5bca6eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;