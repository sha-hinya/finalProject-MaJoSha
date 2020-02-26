const router = require("express").Router();
const Pnnouncement = require("../models/Pnnouncement");
const User = require("../models/User");
/* Here we'll write the routes for the Announcements */

router.get("/announcements", (req, res) => {
  let sort = {};

  //   if (req.query.sortBy) {
  //     sort = { [req.query.sortBy]: -1 };
  //   } else {
  //     sort = { upvote_count: -1 };
  //   }

  Announcement.find()
    .sort(sort)
    .limit(10)
    .then(announcements => {
      res.json(announcements);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

router.get("/announcements/:id", (req, res) => {
  const announcementId = req.params.id;

  Announcement.findById(announcementId)
    .then(announcement => {
      res.json(announcement);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
});

module.exports = router;
