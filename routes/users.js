const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

/* Here we'll write the routes dedicated to handle the user logic (auth) */

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
          return User.create({ username: username, password: hash });
        })
        .then(newUser => {
          // passport login
          req.login(newUser, err => {
            if (err)
              res.status(500).json({ message: "Error while logging in" });
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json({ message: "Error while authorizing" });
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      // no user found with username or password didn't match
      return res.status(400).json({ message: info.message });
    }
    // passport req.login
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Error while logging in" });
      }
      res.json(user);
    });
  })(req, res, next);
});

router.delete("/logout", (req, res) => {
  // passport logout function
  req.logout();
  res.json({ message: "Successful logout" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
