const { Router } = require("express");
const {
  getAllReview,
  getReviewById,
  createReview,
  updateReviewById,
  removeReviewById,
} = require("../controllers/review.controller");

let reviewRouter = Router();

reviewRouter.get("/all", getAllReview);
reviewRouter.get("/:id", getReviewById);
reviewRouter.post("/create", createReview);
reviewRouter.patch("/:id", updateReviewById);
reviewRouter.delete("/:id", removeReviewById);

module.exports = reviewRouter;
