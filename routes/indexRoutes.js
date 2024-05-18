const express = require("express");
const {isAuthenticated} = require("../middleware/authMiddleware.js");


const router = express.Router();

// router.get('/', isAuthenticated, (req, res)=>{
//     if(req.isAuthenticated()){
//         res.render("index", {currentPage: 'home', user: req.user});
//     }else{
//         res.redirect("/login");
//     }
// });

router.get("/", (req, res)=>{
    res.render("index", {currentPage: "home"});
});

router.post("/post", isAuthenticated, (req, res)=>{
    res.redirect("/");
    console.log(req.body);
});

exports.router = router;


