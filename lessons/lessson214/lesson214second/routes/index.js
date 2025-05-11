const { Router } = require("express");
const authorRouter = require("./auth.routes");
let router = Router();
router.use("/auth", authorRouter);

module.exports = router;

