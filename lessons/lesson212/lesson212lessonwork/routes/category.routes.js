const {
  create,
  getAll,
  getById,
  update,
} = require("../controllers/category.controller");

const router = require("express").Router();

router.post("/create", create);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", update);

module.exports = router;
