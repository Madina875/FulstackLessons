const { Router } = require("express");
const {
  getAllImages,
  getImagesById,
  updateImagesById,
  createImages,
  removeImagesById,
} = require("../controllers/images.controller");

let imagesRouter = Router();

imagesRouter.get("/all", getAllImages);
imagesRouter.get("/:id", getImagesById);
imagesRouter.post("/create", createImages);
imagesRouter.patch("/:id", updateImagesById);
imagesRouter.delete("/:id", removeImagesById);

module.exports = imagesRouter;
