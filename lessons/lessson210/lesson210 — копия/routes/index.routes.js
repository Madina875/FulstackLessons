const booksRouter = require("./books.routes");
const router = require("express").Router();

router.use("/books", booksRouter);

module.exports = router;
