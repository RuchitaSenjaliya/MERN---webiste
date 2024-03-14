const express = require("express");
// const { home, register } = require("../controllers/auth-controller");
const authCotroller = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validators");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.route("/").get(authCotroller.home);
router.route("/register").post(validate(signupSchema), authCotroller.register);
router.route("/login").post(validate(loginSchema), authCotroller.login);
router.route("/user").get(authMiddleware, authCotroller.user);

module.exports = router;
