const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const app = express();

// Setup session
app.use(session({
  secret: process.env.SESSION_SECRET || "wdeeswdewsdewse",
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport with Google strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID || "538697283380-xxxxxxxxxx.apps.googleusercontent.com",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "GOCSPX-xxxxxxxxxxxxx",
  callbackURL: "/auth/google/callback",
},
  (accessToken, refreshToken, profile, done) => {
    // Here you'd save the user in DB, for now return profile
    return done(null, profile);
  }
));

// Serialize/Deserialize
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1><a href="/auth/google">Login with Google</a>`);
});

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    console.log("User authenticated:", req.user)
    res.redirect("/profile");
  }
);

app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) return res.redirect("/");
  res.send(`<h2>Hello, ${req.user.displayName}</h2><a href="/logout">Logout</a>`);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));