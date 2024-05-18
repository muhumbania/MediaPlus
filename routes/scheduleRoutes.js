const express = require("express");
const router = express.Router();

router.get("/schedule", (req, res)=>{
    res.render("schedule", {currentPage: "schedule"});
});

exports.router = router;






