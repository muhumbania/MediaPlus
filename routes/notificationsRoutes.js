import  express  from "express";
const router = express.Router();

router.get('/notifications', (req, res)=>{
    res.render('notifications', {
        currentPage: 'notifications',
        filter: 'all'
    });
});

router.get('/notifications/facebook', (req, res)=>{
    res.render('notifications', {
        currentPage: 'notifications',
        filter: 'facebook'
    });
});

router.get('/notifications/linkedin', (req, res)=>{
    res.render('notifications', {
        currentPage: 'notifications',
        filter: 'linkedin'
    });
});

router.get('/notifications/instagram', (req, res)=>{
    res.render('notifications', {
        currentPage: 'notifications',
        filter: 'instagram'
    });
});

router.get('/notifications/x', (req, res)=>{
    res.render('notifications', {
        currentPage: 'notifications',
        filter: 'x'
    });
});

export default router;