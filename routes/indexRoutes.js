import  express  from "express";
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {currentPage: 'home'});
});

router.post('/post', (req, res)=>{
    res.redirect('/');
    console.log(req.body);
});

export default router;

