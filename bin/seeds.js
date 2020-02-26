const mongoose = require("mongoose");

const Post = require("../models/Post");
const posts = require("../bin/posts.json");

const Announcement = require("../models/Announcement");
const announcements = require("../bin/announcements.json");

const Document = require("../models/Document");
const documents = require("../bin/documents.json");

const User = require("../models/User");
const users = require("../bin/users.json");

//mongoose.connect("mongodb://localhost:27017/MaJoSha", () => {
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("Connected to DB");
});

Post.collection.drop();
Announcement.collection.drop();
Document.collection.drop();
User.collection.drop();

Post.create(posts)
  .then(result => {
    console.log(`Created ${result.length} posts`);
  })
  .catch(err => {
    console.log(err);
  });

Announcement.create(announcements)
  .then(result => {
    console.log(`Created ${result.length} announcements`);
  })
  .catch(err => {
    console.log(err);
  });

Document.create(documents)
  .then(result => {
    console.log(`Created ${result.length} documents`);
  })
  .catch(err => {
    console.log(err);
  });

User.create(users)
  .then(result => {
    console.log(`Created ${result.length} users`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
