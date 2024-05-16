// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

//Import the routes functions
import  authRoutes from './routes/authRoutes.js';
import indexRoutes from './routes/indexRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import notificationsRoutes from './routes/notificationsRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';

import express from "express";
import bodyParser from "body-parser";

// app.js
import admin from 'firebase-admin';
import { serviceAccount } from './serviceAccountKey.js';


// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const server = express();
const port = 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

server.use(express.static("public"));

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
// const analytics = getAnalytics(app);

server.use('/', authRoutes); 
server.use('/', indexRoutes);
server.use('/', dashboardRoutes);
server.use('/', notificationsRoutes);
server.use('/', scheduleRoutes);

const db = getFirestore(app);  // Replace 'app' with your initialized Firebase app

//Add the data to the database
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// //Get the data from the data base
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
//   console.log(doc.data());
// });

server.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});
