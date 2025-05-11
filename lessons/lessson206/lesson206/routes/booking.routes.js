const { Router } = require("express");

const {
  getBookingAll,
  getBookingById,
  createBooking,
  removeBookingById,
  updateBookingById,
  CountBookingNUM,
} = require("../controllers/booking.controller");

let bookingRouter = Router();

bookingRouter.get("/all", getBookingAll);
bookingRouter.get("/:id", getBookingById);
bookingRouter.get("countordersFromJuneJune", CountBookingNUM);
bookingRouter.delete("/:id", removeBookingById);
bookingRouter.patch("/:id", updateBookingById);
bookingRouter.post("/create", createBooking);

module.exports = bookingRouter;
