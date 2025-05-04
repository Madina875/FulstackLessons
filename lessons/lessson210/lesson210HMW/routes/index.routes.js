const clientRouter = require("./client.routes");
const currency_typeRouter = require("./currency_type.routes");
const orderRouter = require("./order.routes");

const router = require("express").Router();

router.use("/client", clientRouter);
router.use("/order", orderRouter);
router.use("/ctype", currency_typeRouter);

module.exports = router;
