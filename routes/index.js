/* We'll centralize our routes imports to this file to keep our code clean */


const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const postsRoutes = require('./posts');
const annnouncementsRoutes = require("./announcements");


router.use('/api/auth', authRoutes);
router.use('/api/user', userRoutes);
router.use('/api', postsRoutes);

router.use("/announcements", annnouncementsRoutes);

module.exports = router;
