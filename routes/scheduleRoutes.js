import  express  from "express";
const router = express.Router();

router.get('/schedule', (req, res)=>{
    res.render('schedule', {currentPage: 'schedule'});
});

export default router;






