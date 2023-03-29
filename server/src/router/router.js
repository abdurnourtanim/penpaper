const express = require("express");
const { login, signup, deleteUser } = require("../controller/controller");
const getUser = require("../controller/getUser");
const sendMail = require("../controller/sendMail");
const updateUser = require("../controller/updateUser");

const auth = require("../middleware/auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.delete("/delete", auth, deleteUser);
router.get("/user/:userId", getUser);
router.put("/updateUser/:userId", updateUser);
router.post("/send-mail", sendMail);

module.exports = router;
