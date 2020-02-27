const router = require('express').Router();
const Announcement = require('../models/Announcement');

// READ all and sort
router.get('/', (req, res) => {
  //   let sort = {};

  Announcement.find()
    // .sort(sort)
    // .limit(10)
    .then((announcements) => {
      res.json(announcements);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

/// READ ONE announcement
router.get('/:id', (req, res) => {
  const announcementId = req.params.id;

  Announcement.findById(announcementId)
    .then((announcement) => {
      res.json(announcement);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

// DELETE
router.get('/delete', (req, res, next) => {
  if (req.user) {
    Announcement.deleteOne({ _id: req.user._id })
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
