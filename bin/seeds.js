require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const Announcement = require("../models/Announcement");
const announcements = require("../bin/announcements.json");

const Document = require("../models/Document");
const documents = require("../bin/documents.json");
const propertiesTest = require("../bin/properties.json");

const Post = require("../models/Post");
const posts = require("../bin/posts.json");

// Stack of promisses
const promises = [];

//mongoose.connect(process.env.MONGODB_URI, () => {
mongoose.connect(
  "mongodb://localhost:27017/MaJoSha",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

const bcryptSalt = 10;
const salt = bcrypt.genSaltSync(bcryptSalt);
const hashPass = bcrypt.hashSync("1234", salt);

const newUsers = [
  // normal client : Max Musterman
  {
    lastName: "Mustermann",
    firstName: "Max",
    email: "max.mustermann@example.com",
    password: hashPass,
    phone: "4917112345678",
    accessRole: "client",
    property: [],
    _upvotes: []
  },

  // admin : Armin Admin

  {
    lastName: "Admin",
    firstName: "Armin",
    email: "Armin.Admin@example.com",
    password: hashPass,
    phone: "4917212345678",
    accessRole: "admin",
    property: [],
    _upvotes: []
  },

  // moderator : Melanie Moderator

  {
    lastName: "Moderator",
    firstName: "Melanie",
    email: "Melanie.Moderator@example.com",
    password: hashPass,
    phone: "4917312345678",
    accessRole: "moderator",
    property: [],
    _upvotes: []
  }
];

User.collection.drop();

promises.push(
  User.create(newUsers).then(result => {
    console.log(`Created ${result.length} users`);
  })
);

Post.collection.drop();
promises.push(
  Post.create(posts)
    .then(result => {
      console.log(`Created ${result.length} posts`);
    })
    .catch(err => {
      console.log(err);
    })
);

Announcement.collection.drop();
promises.push(
  Announcement.create(announcements)
    .then(result => {
      console.log(`Created ${result.length} announcements`);
    })
    .catch(err => {
      console.log(err);
    })
);

Document.collection.drop();
promises.push(
  Document.create(documents)
    .then(result => {
      console.log(`Created ${result.length} documents`);
      //mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    })
);

Promise.all(promises).then(result => {
  console.log("Seeds finished");
  mongoose.connection.close();
});
