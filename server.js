import  express  from "express";
import indexRoutes from './routes/indexRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import notificationsRoutes from './routes/notificationsRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';

const app = express();
const port = 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/', dashboardRoutes);
app.use('/', notificationsRoutes);
app.use('/', scheduleRoutes);
app.use('/', authRoutes);

app.use(express.static('public'));

app.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});