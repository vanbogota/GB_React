import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyyaqbpNtotg7JsMoUIXLACh06rtxXMhc",
    authDomain: "gb-react-lesson9-3769c.firebaseapp.com",
    databaseURL: "https://gb-react-lesson9-3769c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-lesson9-3769c",
    storageBucket: "gb-react-lesson9-3769c.appspot.com",
    messagingSenderId: "934576732849",
    appId: "1:934576732849:web:44fd2218c750cdbd9e0090"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app)