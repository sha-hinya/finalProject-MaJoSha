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
// mongoose.connect("mongodb://localhost:27017/MaJoSha", () => {
mongoose.connect(
  process.env.MONGODB_URI,
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
    title: "Mr.",
    email: "max@example.com",
    password: hashPass,
    phone: "+49 171 555 5555",
    accessRole: "client",
    _upvotes: [],
    image:
      "https://images.unsplash.com/photo-1553484771-898ed465e931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  // admin : Armin Admin
  {
    lastName: "Admin",
    firstName: "Armin",
    title: "Mr.",
    email: "admin@example.com",
    password: hashPass,
    phone: "+49 160 555 5555",
    accessRole: "admin",
    image:
      "https://images.unsplash.com/flagged/photo-1575623196339-2ce1a4e7e9f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 ",
    _upvotes: []
  },
  // moderator : Melanie Moderator
  {
    lastName: "Moderator",
    firstName: "Melanie",
    title: "Ms.",
    email: "moderator@example.com",
    password: hashPass,
    phone: "+49 1521 555 5555",
    accessRole: "moderator",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
