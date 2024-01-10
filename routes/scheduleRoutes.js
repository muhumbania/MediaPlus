import  express  from "express";
const router = express.Router();

router.get('/schedule', (req, res)=>{
    res.render('schedule');
});

export default router;






