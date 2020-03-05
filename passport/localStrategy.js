const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Property = require("../models/Property");

passport.use(
  new LocalStrategy(
    {
      // because we are using email as username, we have to tell passport
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, cb) => {
      User.findOne({ email: email.toLowerCase() })
        .populate("property")
        .then(foundUser => {
          if (!foundUser) {
            return cb(null, false, { message: "Incorrect email." });
          }
          // if (password.length < 8) {
          //   return cb(null, false, {
          //     message: "Password is too short, check again"
          //   });
          // }
          return bcrypt.compare(password, foundUser.password).then(match => {
            if (!match) {
              return cb(null, false, { message: "Incorrect password." });
            }
            cb(null, foundUser);
          });
        })
        .catch(err => {
          console.log(err);
          cb(err);
        });
    }
  )
);
