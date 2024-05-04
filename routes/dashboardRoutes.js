import  express  from "express";
const router = express.Router();

router.get('/dashboard/facebook', (req, res)=>{

    if(req.isAuthenticated()){
        res.render("dashboard", {
            currentPage: 'dashboard', 
            user: req.user,
            option: 'Facebook'
        });
    }else{
        res.redirect("/login");
    }
});


router.get('/dashboard/linkedin', (req, res)=>{

    if(req.isAuthenticated()){
        res.render("dashboard", {
            currentPage: 'dashboard', 
            user: req.user,
            option: 'LinkedIn'
        });
    }else{
        res.redirect("/login");
    }
});

router.get('/dashboard/instagram', (req, res)=>{

    if(req.isAuthenticated()){
        res.render("dashboard", {
            currentPage: 'dashboard', 
            user: req.user,
            option: 'Instagram'
        });
    }else{
        res.redirect("/login");
    }
});

router.get('/dashboard/x', (req, res)=>{
    if(req.isAuthenticated()){
        res.render("dashboard", {
            currentPage: 'dashboard', 
            user: req.user,
            option: 'X'
        });
    }else{
        res.redirect("/login");
    }
});

export default router;




