import  express  from "express";
const router = express.Router();

router.get('/login', (req, res)=>{
    res.render('signin');
});

router.get('/register', (req, res)=>{
    res.render('signup');
});

export default router;