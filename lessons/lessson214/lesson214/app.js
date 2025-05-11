const express = require("express");
const login = require("./login");
const test = require("./test");
const logout = require("./logout");
const PORT = 3000;
const app = express();
app.use(express.json());

app.post("/login", login);
app.get("/test", test);
app.use("/logout", logout);

app.listen(PORT, () => {
  console.log("server running on port 3000");
});
