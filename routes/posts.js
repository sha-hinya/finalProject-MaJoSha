const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
/* Here we'll write the routes for the posts */

//==> Image upload

const uploadCloud = require("../services/fileupload");

//==> Routes

router.get("/posts", (req, res) => {
  let sort = {};
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

  Post.find()
    //.sort(sort)
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
    .populate("User")
    .populate("Property")
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
  const { title, content, private } = req.body;
  console.log(req.file);
  const imagePath = req.file
    ? req.file.url
    : "https://res.cloudinary.com/duzn8aucd/image/upload/v1583230140/houselog-images/no-image_k5z6t1.png";

  console.log(imagePath);
  Post.create({
    title: title,
    content: content,
    image: imagePath,
    private: private,
    author: req.user._id
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
        message: err.message
      });
    });
});

// router.delete("/posts/:id/upvote", (req, res) => {
//   const postId = req.params.id;

//   Post.findByIdAndUpdate(postId, { $inc: { upvote_count: -1 } }, { new: true })
//     .then(post => {
//       res.json(post);
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: err.message
//       });
//     });
// });

module.exports = router;
