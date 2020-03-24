const router = require("express").Router();

const { login, register } = require("../controllers/userController");
// Login Router
// localhost:4000/api/user/login
router.route("/login").post(login);

// Register Router
// localhost:4000/api/users/register
router.route("/register").post(register);

module.exports = router;
