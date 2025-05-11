const { Router } = require("express");

const {
  getPaymentAll,
  getPaymentById,
  createPayment,
  removePaymentById,
  updatePaymentById,
} = require("../controllers/payment.controller");

let paymentRouter = Router();

paymentRouter.get("/all", getPaymentAll);
paymentRouter.get("/:id", getPaymentById);
paymentRouter.delete("/:id", removePaymentById);
paymentRouter.patch("/:id", updatePaymentById);
paymentRouter.post("/create", createPayment);

module.exports = paymentRouter;
