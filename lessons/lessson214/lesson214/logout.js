const sessions = require("./session");

module.exports = async (req, res) => {
  const sessionId = req.headers.cookie?.split("=")[1]; // info get
  delete sessions[sessionId]; // delete info
  res.clearCookie("session_id");
  res.send({ message: "You're logged out" });
};
