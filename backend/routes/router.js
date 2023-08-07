const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController");

//Routes
// router.post("/user/register", controllers.userregister);
router.post("/user/phone", controllers.userphone);

module.exports = router;