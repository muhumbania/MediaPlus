import  express  from "express";
const router = express.Router();

router.get('/dashboard', (req, res)=>{
    res.render('dashboard', {currentPage: 'dashboard'});
});

export default router;




