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

const server = express();
const port = 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

server.use(express.static("public"));

server.use('/', authRoutes); 
server.use('/', indexRoutes);
server.use('/', dashboardRoutes);
server.use('/', notificationsRoutes);
server.use('/', scheduleRoutes);

server.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});
