import  express  from "express";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/dashboard', (req, res)=>{
    res.render('dashboard');
});

app.get('/notifications', (req, res)=>{
    res.render('notifications');
});

app.get('/schedule', (req, res)=>{
    res.render('schedule');
});

app.get('/login', (req, res)=>{
    res.render('signin');
});

app.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});