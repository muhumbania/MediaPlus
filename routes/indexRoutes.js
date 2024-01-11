import  express  from "express";
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {currentPage: 'home'});
});

export default router;






