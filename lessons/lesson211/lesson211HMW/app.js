const express = require("express");
const dotenv = require("dotenv");
const config = require("config");
const indexRouter = require("./routes/index.routes");
dotenv.config();
const mongoose = require("mongoose");
const PORT = config.get("port") || 3030;

const app = express();
app.use(express.json());
app.use("/api", indexRouter);

async function start() {
  try {
    const uri = config.get("dbUri");
    await mongoose.connect(uri);
    app.listen(PORT, () => {
      console.log(`server running on: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
