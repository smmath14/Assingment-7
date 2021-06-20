const express = require("express");
const router = express();
const Admin = require("../material/admin");
const AdminController = require("../Controller/adminController");
router.post("/admin/Signup",adminController.adminSignup);
router.post("/admin/Login", adminController.adminLogin)
module.exports = router;