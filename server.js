import  express  from "express";
import indexRoutes from './routes/indexRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import notificationsRoutes from './routes/notificationsRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import authRoutes from './routes/authRoutes.js';
// import path from 'path';
import flash from "connect-flash";

import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT;

// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(flash());

const saltRounds = 10;

app.use(
  session({
    secret: "TOPSECRETWORD",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
db.connect();

app.use('/', indexRoutes);
app.use('/', dashboardRoutes);
app.use('/', notificationsRoutes);
app.use('/', scheduleRoutes);
// app.use('/', authRoutes);

app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })
);

app.post("/register", async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    try {
        const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
        ]);

        if (checkResult.rows.length > 0) {
        req.redirect("/login");
        } else {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
            console.error("Error hashing password:", err);
            } else {
            const result = await db.query(
                "INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING *",
                [email, hash, username]
            );
            const user = result.rows[0];
            req.login(user, (err) => {
                console.log("success");
                res.redirect("/");
            });
            }
        });
        }
    } catch (err) {
        console.log(err);
    }
});

passport.use(
    new Strategy(async function verify(username, password, cb) {
      try {
        const result = await db.query("SELECT * FROM users WHERE username = $1 ", [
          username,
        ]);
        if (result.rows.length > 0) {
          const user = result.rows[0];
          const storedHashedPassword = user.password;
          bcrypt.compare(password, storedHashedPassword, (err, valid) => {
            if (err) {
              //Error with password check
              console.error("Error comparing passwords:", err);
              return cb(err);
            } else {
              if (valid) {
                //Passed password check
                return cb(null, user);
              } else {
                //Did not pass password check
                return cb(null, false, { message: "Incorrect password." });
              }
            }
          });
        } else {
          return cb(null, false, { message: "Incorrect username." });
        }
      } catch (err) {
        console.log(err);
      }
    })
  );

app.get('/login', (req, res) => {
    res.render("signin", { message: req.flash('error') });
});

app.get('/register', (req, res) => {
    res.render("signup");
});

passport.serializeUser((user, cb) => {
    cb(null, user);
  });
passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.listen(3000 , ()=>{
    console.log(`server listening to port ${port}`);
});