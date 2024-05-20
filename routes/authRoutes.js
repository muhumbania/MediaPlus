import express from 'express';

import bodyParser from 'body-parser';

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

router.get("/login", (req, res)=>{
    res.render("signin");
});

router.get("/register", (req, res)=>{
    res.render("signup");
});

// Sign up route
router.post("/register", async (req, res) => {
});

// Sign in route
router.post("/login", async (req, res) => {
});

// Sign out route
router.post("/logout", async (req, res) => {
});

export default router;


