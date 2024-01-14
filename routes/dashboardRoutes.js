import  express  from "express";
const router = express.Router();

router.get('/dashboard/facebook', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'Facebook'
    });
});


router.get('/dashboard/linkedin', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'Linkedin'
    });
});

router.get('/dashboard/instagram', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'Instagram'
    });
});

router.get('/dashboard/x', (req, res)=>{
    res.render('dashboard', {
        currentPage: 'dashboard',
        option: 'X'
    });
});

export default router;




