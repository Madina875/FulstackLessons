const { v4 } = require("uuid"); //method
const sessions = require("./session");

module.exports = async (req, res) => {
  const { username, password } = req.body;
  //autentifikatsiya
  if (username !== "admin" || password !== "qwerty") {
    return res.status(401).send({ message: "Login yoki password noto'g'ri" });
  }
  const sessionId = v4();
  sessions[sessionId] = { username, userId: 1 };
  console.log(sessions);

  res.cookie("session_id", sessionId, { httpOnly: true }); //saqlanmoqda
  res.send({ message: "Tizimga xush kelibsiz!😸" });
};

