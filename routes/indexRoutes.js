import  express  from "express";
import { isAuthenticated } from '../middleware/authMiddleware.js'; // Update the path

const router = express.Router();

router.get('/', isAuthenticated, (req, res)=>{
    if(req.isAuthenticated()){
        res.render("index", {currentPage: 'home', user: req.user});
    }else{
        res.redirect("/login");
    }
});

router.post('/post', isAuthenticated, (req, res)=>{
    res.redirect('/');
    console.log(req.body);
});

export default router;

