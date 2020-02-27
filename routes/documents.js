const router = require("express").Router();
const Document = require("../models/Document");

//read all
router.get("/", (req, res) => {
  Document.find()
    .sort(sort)
    .then(document => {
      res.json(document);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

// read ONE
router.get("/:id", (req, res) => {
  const documentId = req.params.id;

  Document.findById(documentId)
    .then(document => {
      res.json(announcement);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

//delete
router.get("/delete", (req, res, next) => {
  if (req.user) {
    Document.deleteOne({ _id: req.user._id })
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        next(err);
      });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
