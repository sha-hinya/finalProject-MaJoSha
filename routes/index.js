/* We'll centralize our routes imports to this file to keep our code clean */

const router = require("express").Router();
const usersRoutes = require("./users");
const postsRoutes = require("./posts");

router.get("/", (req, res) => {
  res.send("This is home");
});

router.use("/api", usersRoutes);
router.use("/api", postsRoutes);

module.exports = router;
