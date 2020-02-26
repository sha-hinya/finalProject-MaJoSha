/* We'll centralize our routes imports to this file to keep our code clean */

const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const postsRoutes = require('./posts');

router.use('/api/auth', authRoutes);
router.use('/api/user', userRoutes);
router.use('/api', postsRoutes);

module.exports = router;
