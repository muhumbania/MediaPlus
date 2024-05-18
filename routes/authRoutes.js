import express from 'express';

import admin from 'firebase-admin';
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
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.json({ uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Sign in route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await admin.auth().signInWithEmailAndPassword(email, password);
    res.json({ uid: userCredential.user.uid });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Sign out route
router.post("/logout", async (req, res) => {
  try {
    await admin.auth().revokeRefreshTokens(req.body.uid);
    res.json({message: "Sign-out successful"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;


