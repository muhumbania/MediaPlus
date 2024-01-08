import  express  from "express";

const appp = express();
const port = 3000;

appp.get('/', (req, res)=>{
    res.send('Hello world');
});

appp.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});