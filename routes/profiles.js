const router = require("express").Router();
// const Calender = require("../models/File");

// read ONE
router.get("/:id", (req, res) => {
  console.log("Read one Calender Entry");
  const fileId = req.params.id;

  Calender.findById(fileId)
    .then(file => {
      res.json(file);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

module.exports = router;
