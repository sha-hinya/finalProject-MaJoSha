const router = require("express").Router();
const Property = require("../models/Property");

router.get("/", (req, res) => {
  Property.find()
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
  const propertyId = req.params.id;

  Property.findById(propertyId)
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
