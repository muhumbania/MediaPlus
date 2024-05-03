import  express  from "express";
import indexRoutes from './routes/indexRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import notificationsRoutes from './routes/notificationsRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import authRoutes from './routes/authRoutes.js';
// import path from 'path';
// import flash from "connect-flash";

import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
// import env from "dotenv";

const app = express();
const port = 3000;

// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// app.use(flash());

const saltRounds = 10;
// env.config();

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
  user: "postgres",
  host: "localhost",
  database: "mediaPlus",
  password: "postgresmhb",
  port: 5432,
});
db.connect();

app.use('/', indexRoutes);
app.use('/', dashboardRoutes);
app.use('/', notificationsRoutes);
app.use('/', scheduleRoutes);
app.use('/', authRoutes);

app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
);

app.post("/register", async (req, res) => {
    const email = req.body.username;
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
                "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
                [email, hash]
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
        const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
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
                return cb(null, false);
              }
            }
          });
        } else {
          return cb("User not found");
        }
      } catch (err) {
        console.log(err);
      }
    })
  );

app.get('/login', (req, res) => {
    res.render("login.ejs");
});

app.get('/register', (req, res) => {
    res.render("register.ejs");
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