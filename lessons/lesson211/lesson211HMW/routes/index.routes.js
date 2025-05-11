const clientRouter = require("./client.routes");
const currency_typeRouter = require("./currency_type.routes");
const orderRouter = require("./order.routes");
const adminRouter = require("./admin.routes");
const operationRouter = require("./operation.routes");
const statusRouter = require("./status.routes");

const router = require("express").Router();

router.use("/client", clientRouter);
router.use("/order", orderRouter);
router.use("/ctype", currency_typeRouter);
router.use("/stats", statusRouter);
router.use("/admins", adminRouter);
router.use("/oper", operationRouter);

module.exports = router;
