const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
let app = express();
const indexRouter = require("./routes");
let PORT = config.get("PORT") || 4000;
app.use(express.json());
app.use("/api", indexRouter);


async function start(params) {
  try {
    await mongoose.connect(
      "mongodb+srv://superadmin:admin123@cluster0.uevvi7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("error: ", error.message);
  }
}
start();
