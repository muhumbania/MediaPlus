import  express  from "express";
const router = express.Router();

router.get('/', (req, res)=>{
    if(req.isAuthenticated()){
        res.render("index", {currentPage: 'home', user: req.user});
    }else{
        res.redirect("/login");
    }
});

router.post('/post', (req, res)=>{
    res.redirect('/');
    console.log(req.body);
});

export default router;

