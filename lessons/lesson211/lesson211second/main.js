const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const PORT = config.get("port") || 3030;

const app = express();
app.use(express.json());

const indexRouter = require("./routes");

app.use("/api", indexRouter);

async function start() {
  try {
    await mongoose.connect("mongodb://localhost:27017/validation");
    app.listen(PORT, () => {
      console.log(`server running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
