require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const Announcement = require("../models/Announcement");
const announcements = require("../bin/announcements.json");

const File = require("../models/File");
const files = require("../bin/files.json");

const propertiesTest = require("../bin/properties.json");

const Post = require("../models/Post");
const posts = require("../bin/posts.json");

const Property = require("../models/Property");
const properties = require("../bin/properties.json");

// Stack of promisses
const promises = [];

let propertyIds = [];
let userIds = [];
mongoose.connect("mongodb://localhost:27017/MaJoSha", () => {
  // mongoose.connect(
  //   process.env.MONGODB_URI,
  //   { useNewUrlParser: true, useUnifiedTopology: true },
  //   () => {
  console.log("Connected to DB");
});
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
    _upvotes: []
  },
  // admin : Armin Admin
  {
    lastName: "Admin",
    firstName: "Armin",
    email: "armin.admin@example.com",
    password: hashPass,
    phone: "4917212345678",
    accessRole: "admin",
    _upvotes: []
  },
  // moderator : Melanie Moderator
  {
    lastName: "Moderator",
    firstName: "Melanie",
    email: "melanie.moderator@example.com",
    password: hashPass,
    phone: "4917312345678",
    accessRole: "moderator",
    _upvotes: []
  }
];

// adds properties and saves the ids in an array to set users and posts,

Property.collection.drop();
promises.push(
  Property.create(properties)
    .then(result => {
      console.log(`Created ${result.length} properties`);
      result.forEach(element => {
        propertyIds.push(element._id);
      });
      console.log(propertyIds);
      // all users get all propertyIds

      newUsers[0].property = [...propertyIds];
      newUsers[1].property = [...propertyIds];
      newUsers[2].property = [...propertyIds];

      User.collection.drop();

      return User.create(newUsers);
    })
    .then(users => {
      userIds = [...users];
      console.log(`Created ${users.length} users`);
      console.log(users);

      posts.forEach((element, index) => {
        if (index % 2 === 0) {
          element.property = propertyIds[0];
        } else {
          element.property = propertyIds[1];
        }
        element.author = users[2]._id;
        return;
      });
      Post.collection.drop();
      return Post.create(posts);
    })
    .then(result => {
      console.log(`Created ${result.length} posts`);
      announcements.forEach((element, index) => {
        if (index % 2 === 0) {
          element.property = propertyIds[0];
        } else {
          element.property = propertyIds[1];
        }
        element.author = userIds[2]._id;
        return;
      });
      Announcement.collection.drop();
      return Announcement.create(announcements);
    })
    .then(result => {
      console.log(`Created ${result.length} Announcements`);

      files.forEach((element, index) => {
        element.property = [...propertyIds];
        element.userId = [...userIds];
      });
    })
    .catch(err => {
      console.log(err);
    })
);

File.collection.drop();
promises.push(
  File.create(files)
    .then(result => {
      console.log(`Created ${result.length} files`);
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
