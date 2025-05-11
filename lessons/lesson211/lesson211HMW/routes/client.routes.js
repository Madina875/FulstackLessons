const {
  getAll,
  getOne,
  create,
  remove,
  update,
} = require("../controllers/client.controller");

const router = require("express").Router();

router.get("/", getAll);
router.post("/create", create);
router.get("/:id", getOne);
router.delete("/:id", remove);
router.patch("/:id", update);

module.exports = router;
