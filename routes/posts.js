const router = require("express").Router();
const Post = require("../models/Post");
/* Here we'll write the routes for the posts */

router.get("/posts", (req, res) => {
  let sort = {};
  if (req.query.sortBy) {
    sort[req.query.sortBy] = -1;
  } else {
    sort.upvote_count = -1;
  }
  console.log("req.query", req.query);
  console.log("sort", sort);

  Post.find()
    .sort(sort)
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
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.post("/posts", (req, res) => {
  // const title = req.body.title;
  // const type = req.body.type;
  // const content = req.body.content
  const { title, type, content } = req.body;

  Post.create({
    title: title,
    type: type,
    content: content,
    upvote_count: 0
    // author: req.user._id
  })
    .then(postDocument => {
      res.json(postDocument);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.post("/posts/:id/upvote", (req, res) => {
  const postId = req.params.id;

  Post.findByIdAndUpdate(postId, { $inc: { upvote_count: 1 } }, { new: true })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.delete("/posts/:id/upvote", (req, res) => {
  const postId = req.params.id;

  Post.findByIdAndUpdate(postId, { $inc: { upvote_count: -1 } }, { new: true })
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

module.exports = router;
