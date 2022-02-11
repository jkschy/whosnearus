import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDsfUob7nJmlrrU5o9aCB3x2b5MfRZESXs",
    authDomain: "whosnearus-prod.firebaseapp.com",
    projectId: "whosnearus-prod",
    storageBucket: "whosnearus-prod.appspot.com",
    messagingSenderId: "571490605318",
    appId: "1:571490605318:web:8c5ad689683b8c02f86687",
    measurementId: "G-DWBCJ2H3H3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
