const dictRouter = require("./dict.routes");
const router = require("express").Router();

router.use("/dict", dictRouter);

module.exports = router;

