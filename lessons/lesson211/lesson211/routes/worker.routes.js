const { addWor, getAllWor } = require("../controllers/worker.controller");
const router = require("express").Router();

router.post("/create", addWor);
router.get("/all", getAllWor);

module.exports = router;
