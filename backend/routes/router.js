const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController");

//Routes
router.post("/user/phone", controllers.userphone);
router.post("/user/register", controllers.userregister);

module.exports = router;
