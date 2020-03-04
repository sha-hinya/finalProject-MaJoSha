const router = require("express").Router();
const File = require("../models/File");

//read all
router.get("/", (req, res) => {
  File.find()
    //.sort(sort)
    .then(file => {
      res.json(file);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

// read ONE
router.get("/:id", (req, res) => {
  console.log("Read one File");
  const fileId = req.params.id;

  File.findById(fileId)
    .then(file => {
      res.json(file);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

//delete
router.delete("/delete/:id", (req, res, next) => {
  if (req.user) {
    File.deleteOne({ _id: req.params.id })
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
