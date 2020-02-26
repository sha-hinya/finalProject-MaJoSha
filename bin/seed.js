const User = require('../models/User');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('dotenv').config();

// Stack of promisses

const promises = [];

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log('connected to DB for seed');
});
const bcryptSalt = 10;
const salt = bcrypt.genSaltSync(bcryptSalt);
const hashPass = bcrypt.hashSync('1234', salt);

// < === Begin of User Seed

const newUsers = [
  // normal client : Max Musterman
  {
    lastName: 'Mustermann',
    firstName: 'Max',
    email: 'max.mustermann@example.com',
    password: hashPass,
    phone: '4917112345678',
    accessRole: 'client',
    property: [],
    _upvotes: [],
  },

  // admin : Armin Admin

  {
    lastName: 'Admin',
    firstName: 'Armin',
    email: 'Armin.Admin@example.com',
    password: hashPass,
    phone: '4917212345678',
    accessRole: 'admin',
    property: [],
    _upvotes: [],
  },

  // moderator : Melanie Moderator

  {
    lastName: 'Moderator',
    firstName: 'Melanie',
    email: 'Melanie.Moderator@example.com',
    password: hashPass,
    phone: '4917312345678',
    accessRole: 'moderator',
    property: [],
    _upvotes: [],
  },
];
User.collection.drop();

promises.push(
  User.create(newUsers).then((result) => {
    console.log(result);
  }),
);

// === > End of User Seed

// run all promisses and wait until they are done!

Promise.all(promises).then((result) => {
  console.log('Seeds finished');
  mongoose.connection.close();
});
