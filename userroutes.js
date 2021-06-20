const express = require("express");
const router = express();
const User = require("../material/User");
const UserController = require("../Controller/UserController");
router.post("/Signup",UserController.Signup);
router.post("/login", UserController.login)
router.post("/postblog", UserController.postBlog);
router.get("/getblog/:id", UserController.getblog);
router.get("/getUser/:id", UserController.getById);
module.exports = router;