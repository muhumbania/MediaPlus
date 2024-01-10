import  express  from "express";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});