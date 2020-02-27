const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

/* Here we'll write the routes dedicated to handle the user logic (auth) */

// TODO: EXCLUDE TO a Service directory
// <=== node-mailer text for the invite mail
var nodemailer = require('nodemailer');
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

// ===> node mailer end

function validatePassword(password, confirmpassword, err) {
  if (password.length <= 6) {
    err.push(`password length must be greater than 6`);
    return false;
  }
  if (password.trim() !== confirmpassword.trim()) {
    err.push(`password and confirmpassword are not equal`);
    return false;
  }
  return true;
}

// TODO: maybe in Service? should be useable by others too.
// Checks for accessRole in the user and allows access or not.

function validateAccess(role = []) {
  return (req, res, next) => {
    console.log(req.user, role);
    // when user is not logged in , no access
    if (!req.user) {
      return res.status(401).json({ message: 'Unautorized action' });
    }
    // if user is
    if (role.length > 0 && !role.includes(req.user.accessRole)) {
      return res.status(401).json({ message: 'Unautorized action' });
    }

    next();
  };
}

// <=== Routes start

// Create User
// An admin or moderator can create a new user. A default password is set and should be send to
// the mandatory e-mail adress.
router.post('/', validateAccess(['admin', 'moderator']), (req, res) => {
  const newUserCredentials = { ...req.body };
  if (!newUserCredentials.email) {
    return res.status(400).json({ message: 'email-adress is mandatory' });
  }

  // TODO: for production it should be random
  const defaultPassword = '1234';

  User.findOne({ email: newUserCredentials.email })
    .then((found) => {
      if (found) {
        return res.status(400).json({ message: 'email is already in user' });
      }
      return bcrypt
        .genSalt()
        .then((salt) => {
          return bcrypt.hash(defaultPassword, salt);
        })
        .then((hash) => {
          return User.create({
            ...newUserCredentials,
            password: hash,
          });
        })
        .then((newUser) => {
          // send the new user
          return res.json(newUser);

          // TODO: send email to adress!
        });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error while authorizing' });
    });
});

// Read all Users

router.get('/', (req, res) => {
  const propertyId = req.query.property ? req.query.property.split(',') : false;

  if (!req.user) {
    console.log('unauthorized');
    return res.status(401).json({ message: 'Unautorized action' });
  }
  console.log(propertyId);
  User.find(propertyId ? { property: { $all: propertyId } } : {})
    .then((foundUsers) => {
      return res.json(foundUsers);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
});

// Read specific User

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
      return res.status(500).json({ message: err.message });
    });
});

// Update one user

router.post('/:userId/edit', (req, res) => {
  // access to the route
  const userId = req.params.userId;
  const { lastName, firstName, email, password, phone, property } = req.body;
  const updatedUser = {
    ...req.body,
  };

  if (!req.user) {
    return res.status(401).json({ message: 'Unautorized action' });
  }

  if (req.user._id.toString() !== userId && req.user.role !== 'admin') {
    return res.status(401).json({ message: 'Unautorized action' });
  }

  User.findById(userId)
    .then((foundUser) => {
      console.log('foundUser:', foundUser);
      console.log('updatedUser:', updatedUser);

      return User.findByIdAndUpdate(
        userId,
        { ...foundUser._doc, ...updatedUser },
        { new: true },
      );

      // User.findByIdAndUpdate(userId,)
    })
    .then((newUser) => {
      return res.json(newUser);
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
});

// Update User Password

router.post('/:userId/resetpass', (req, res) => {
  const userId = req.params.userId;
  const { password, confirmPassword } = req.body;
  const error = [];

  // Access:
  // could be used as overall middleware
  if (!req.user) {
    return res.status(401).json({ message: 'Unautorized action' });
  }
  // Just the client / user him self is allowed to change the password
  if (req.user._id.toString() !== userId) {
    return res.status(401).json({ message: 'Unautorized action' });
  }

  // Passwordvalidation
  if (!validatePassword(password, confirmPassword, error)) {
    const message = error.join(';');
    return res.status(400).json({ message });
  }

  // Password generation and user update
  return bcrypt
    .genSalt()
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      return User.findByIdAndUpdate(userId, { password: hash });
    })
    .then((newUser) => {
      // passport login
      return res.json({ message: 'password changed' });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Delete User

router.delete(
  '/:userId',
  validateAccess(['admin', 'moderator']),
  (req, res) => {
    // access restriction to admin and moderator
    // outsource
    const userId = req.params.userId;
    // just admins can delete one

    User.deleteOne({ _id: userId })
      .then((foundUsers) => {
        return res.json(foundUsers);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  },
);

module.exports = router;
