import  express  from "express";
const router = express.Router();

router.get('/notifications', (req, res)=>{
    res.render('notifications', {currentPage: 'notifications'});
});

router.get('/notifications/facebook', (req, res)=>{
    res.render('notifications', {currentPage: 'notifications'});
});

export default router;