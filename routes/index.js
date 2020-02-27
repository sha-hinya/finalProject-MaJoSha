/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./users");
const postsRoutes = require("./posts");
const annnouncementsRoutes = require("./announcements");
const filesRoutes = require("./files");

router.use("/api/auth", authRoutes);
router.use("/api/user", userRoutes);
router.use("/api", postsRoutes);
// needed to add API to the path
router.use("/api/announcements", annnouncementsRoutes);
router.use("/api/files", filesRoutes);

module.exports = router;
