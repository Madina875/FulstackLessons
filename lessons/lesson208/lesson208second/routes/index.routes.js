const { Router } = require("express");

const userRoute = require("./user.routes");
const adressRoute = require("./adress.routes");
const orderRoute = require("./order.routes");
const paymentRoute = require("./payment.routes");
const phoneRoute = require("./phone.routes");
const deliverRoute = require("./deliver.routes");

let router = Router();

router.use("/user", userRoute);
router.use("/adress", adressRoute);
router.use("/order", orderRoute);
router.use("/payment", paymentRoute);
router.use("/phone", phoneRoute);
router.use("/deliver", deliverRoute);

module.exports = router;
