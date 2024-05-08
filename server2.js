// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBkkdjq_u9XG3veDRgvr-KdQFMpvhr5FbY",
    authDomain: "umaizi.firebaseapp.com",
    projectId: "umaizi",
    storageBucket: "umaizi.appspot.com",
    messagingSenderId: "746191270515",
    appId: "1:746191270515:web:688b88d68ec4601a72b006",
    measurementId: "G-HWV86R455H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);  // Replace 'app' with your initialized Firebase app

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

