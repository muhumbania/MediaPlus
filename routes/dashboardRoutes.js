import express from 'express';
const router = express.Router();

router.get("/dashboard/facebook", (req, res)=>{
    res.render("dashboard", {
        currentPage: "dashboard", 
        user: req.user,
        option: "Facebook"
    });
});

router.get("/dashboard/linkedin", (req, res)=>{
    isAuth("LinkedIn", req, res);
});

router.get("/dashboard/instagram", (req, res)=>{
    isAuth("Instagram", req, res);
});

router.get("/dashboard/x", (req, res)=>{
    isAuth("X", req, res);
});

function isAuth(option, req, res){
    if(req.isAuthenticated()){
        res.render("dashboard", {
            currentPage: "dashboard", 
            user: req.user,
            option: option
        });
    }else{
        res.redirect("/login");
    }
}

export default router;





