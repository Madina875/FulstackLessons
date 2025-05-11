const booksRouter = require("./books.routes");
const depsRouter = require("./deps.routes");
const worRoutes = require("./worker.routes");

const router = require("express").Router();

router.use("/books", booksRouter);
router.use("/deps", depsRouter);
router.use("/worker", worRoutes);

module.exports = router;
