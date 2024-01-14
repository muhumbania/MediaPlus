import  express  from "express";
const router = express.Router();

router.get('/dashboard/facebook', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'facebook'
    });
});


router.get('/dashboard/linkedin', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'linkedin'
    });
});

router.get('/dashboard/instagram', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'instagram'
    });
});

router.get('/dashboard/x', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'x'
    });
});

export default router;




