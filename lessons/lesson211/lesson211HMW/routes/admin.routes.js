const {
  getAll,
  getOne,
  create,
  remove,
  update,
} = require("../controllers/admin.controller");

const router = require("express").Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/create", create);
router.delete("/:id", remove);
router.patch("/:id", update);

module.exports = router;
