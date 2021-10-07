// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


export const initialize = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD52GO969ZsmKAHU258PgCkOony5g2Aruw",
        authDomain: "fireside-1de9c.firebaseapp.com",
        projectId: "fireside-1de9c",
        storageBucket: "fireside-1de9c.appspot.com",
        messagingSenderId: "361986251425",
        appId: "1:361986251425:web:d0440edd81840da9ca6ee0",
        measurementId: "G-M5XGV85E6H"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
}
