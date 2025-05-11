const { Router } = require("express");
const { login, register } = require("../controllers/auth.controller");

let router = Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;
