//Import the routes functions
import  authRoutes from './routes/authRoutes.js';
import indexRoutes from './routes/indexRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import notificationsRoutes from './routes/notificationsRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

server.use(express.static("public"));

server.use('/', authRoutes); 
server.use('/', indexRoutes);
server.use('/', dashboardRoutes);
server.use('/', notificationsRoutes);
server.use('/', scheduleRoutes);

server.get('/config', (req, res) => {
    res.json({
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      linkedInClientId: process.env.LINKEDIN_CLIENT_ID,
    });
});

server.listen(PORT , ()=>{
    console.log(`server listening to port ${PORT}`);
});
