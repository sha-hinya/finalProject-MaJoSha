const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');
var nodemailer = require('nodemailer');

/* Here we'll write the routes dedicated to handle the user logic (auth) */

// node-mailer
const getEmailText = (email, randomPassword) => {
  return `
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Welcome to Ironhack Connect </title>
		</head>
		<body>
			<h1> Welcome to Ironhack Connect </h1>
			<p>Please login on <a href="http://ironhack-connect.herokuapp.com"> http://ironhack-connect.herokuapp.com </a>
			<p><b>Using your eMail: </b> ${email}</p>
			<p><b>And this password: </b> ${randomPassword}</p>
		</body>
	</html>`;
};

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// need to be logged in

// TODO Check for authentication function

router.post('/', (req, res) => {
  // access restriction to admin and moderator
  // outsource

  if (
    !req.user ||
    (req.user && (req.user.role !== 'admin' || req.user.role !== 'moderator'))
  ) {
    console.log('unauthorized');
    return res.status(401).json({ message: 'Unautorized action' });
  }

  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password is too short' });
  }

  User.findOne({ email: email })
    .then((found) => {
      if (found) {
        return res.status(400).json({ message: 'email is already in user' });
      }
      return bcrypt
        .genSalt()
        .then((salt) => {
          return bcrypt.hash(password, salt);
        })
        .then((hash) => {
          return User.create({ email: email, password: hash });
        })
        .then((newUser) => {
          // passport login
          req.login(newUser, (err) => {
            if (err)
              res.status(500).json({ message: 'Error while logging in' });
            else res.json(newUser);
          });
        });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error while authorizing' });
    });
});

router.get('/', (req, res) => {
  // access restriction to admin and moderator
  // outsource

  const propertyIds = req.query.property
    ? req.query.property.split(',')
    : false;

  if (!req.user) {
    console.log('unauthorized');
    return res.status(401).json({ message: 'Unautorized action' });
  }
  console.log(propertyId);
  User.find(propertyId ? { property: { $all: propertyIds } } : {})
    .then((foundUsers) => {
      return res.json(foundUsers);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:userId', (req, res) => {
  // access restriction to admin and moderator
  // outsource
  const userId = req.params.userId;

  if (!req.user) {
    console.log('unauthorized');
    return res.status(401).json({ message: 'Unautorized action' });
  }

  User.findById(userId)
    .then((foundUsers) => {
      return res.json(foundUsers);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.patch('/:userId/edit', (req, res) => {
  // access restriction to admin and moderator
  // outsource
  const userId = req.params.userId;

  const { lastName, firstName, email, password, phone, property } = req.body;

  if (!req.user) {
    console.log('unauthorized');
    return res.status(401).json({ message: 'Unautorized action' });
  }

  User.findByIdAndUpdate(userId, {
    lastName,
    firstName,
    email,
    password,
    phone,
    property,
  })
    .then((foundUsers) => {
      return res.json(foundUsers);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get('/:userId', (req, res) => {
  // access restriction to admin and moderator
  // outsource
  const userId = req.params.userId;

  if (!req.user) {
    console.log('unauthorized');
    return res.status(401).json({ message: 'Unautorized action' });
  }

  User.findById(userId)
    .then((foundUsers) => {
      return res.json(foundUsers);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
