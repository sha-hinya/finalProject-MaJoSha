const router = require("express").Router();
const Calender = require("../models/File");

//read all
router.get("/", (req, res) => {
    console.log("Read ALL Calender Entries");
    Calender.find()
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
