const router = require("express").Router();

const Document = require("../models/Document");

//read all
router.get("/documents", (req, res) => {
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
