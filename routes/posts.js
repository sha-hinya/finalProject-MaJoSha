const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
/* Here we'll write the routes for the posts */

//==> Image upload

const uploadCloud = require("../services/fileupload");

//==> Routes

router.get("/posts", (req, res) => {
  let sort = {};
  const propertyId = req.query.property;
  console.log("Get Route property: ", req.query);
  // if (req.query.sortBy) {
  //   sort[req.query.sortBy] = -1;
  // } else {
  //   sort.upvote_count = -1;
  // }
  if (req.query.sortBy) {
    sort = { [req.query.sortBy]: -1 };
  } else {
    sort = { upvote_count: -1 };
  }

  Post.find({ property: { _id: propertyId } })
    .populate("author")
    .sort({ created_at: -1 })
    .limit(10)
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get("/posts/:id", (req, res) => {
  const postId = req.params.id;

  Post.findById(postId)
    .populate("author")
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.post("/posts", uploadCloud.single("image"), (req, res) => {
  // Todo: add a middleware to protect this route from non-logged in users
  const { title, content, private, property } = req.body;
  console.log(req.file);
  const imagePath = req.file
    ? req.file.url
    : "https://res.cloudinary.com/duzn8aucd/image/upload/v1583230140/houselog-images/no-image_k5z6t1.png";

  Post.create({
    title: title,
    content: content,
    image: imagePath,
    private: private,
    author: req.user._id,
    property: property
  })
    .then(postFile => {
      res.json(postFile);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: err.message
      });
    });
});

router.put("/posts/:postId", uploadCloud.single("image"), (req, res) => {
  // Todo: add a middleware to protect this route from non-logged in users
  const postId = req.params.postId;
  const { title, content, private, property, imageUrl, status } = req.body;

  const imagePath = req.file ? req.file.url : imageUrl;

  Post.findOneAndUpdate(
    { _id: postId },
    {
      title: title,
      content: content,
      image: imagePath,
      private: private,
      property: property,
      status: status
    }
  )
    .then(postFile => {
      res.json(postFile);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: err.message
      });
    });
});

router.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;

  Post.deleteOne({ _id: postId })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/posts/:id/upvote", (req, res) => {
  const postId = req.params.id;

  const isUpvoted = req.user._upvotes.find(id => {
    return id.toString() === postId;
  });

  let incr = 1;
  if (isUpvoted) {
    incr = -1;
    User.updateOne(
      { _id: req.user._id },
      { $pull: { _upvotes: postId } }
    ).exec();
  } else {
    User.updateOne(
      { _id: req.user._id },
      { $addToSet: { _upvotes: postId } }
    ).exec();
  }

  Post.findByIdAndUpdate(
    postId,
    { $inc: { upvote_count: incr } },
    { new: true }
  )
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: err.message10
      });
    });
});

module.exports = router;
