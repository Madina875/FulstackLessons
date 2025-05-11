const { Router } = require("express");
const {
  getStadiumAll,
  getOneStadiumById,
  createStadium,
  updateStadiumById,
  removeStadiumById,
  filterStadion,
} = require("../controllers/stadium.controller");

let stadiumRouter = Router();

stadiumRouter.get("/all", getStadiumAll);
stadiumRouter.post("/create", createStadium);

stadiumRouter.post("/filterS", filterStadion);

stadiumRouter.get("/:id", getOneStadiumById);
stadiumRouter.patch("/:id", updateStadiumById);
stadiumRouter.delete("/:id", removeStadiumById);

module.exports = stadiumRouter;
