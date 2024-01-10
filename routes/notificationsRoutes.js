import  express  from "express";
const router = express.Router();

router.get('/notifications', (req, res)=>{
    res.render('notifications');
});

export default router;