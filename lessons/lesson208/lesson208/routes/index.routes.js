const { Router } = require("express");

const usersRouter = require("./users.routes");
const stadiumRouter = require("./stadium.routes");
const bookingRouter = require("./booking.routes");
const reviewRouter = require("./review.routes");
const imagesRouter = require("./images.routes");
const paymentRouter = require("./payment.routes");

let router = Router();

router.use("/users", usersRouter);
router.use("/stadium", stadiumRouter);
router.use("/booking", bookingRouter);
router.use("/review", reviewRouter);
router.use("/images", imagesRouter);
router.use("/payment", paymentRouter);

module.exports = router;
