const sessions = require("./session");

module.exports = (req, res) => {
  console.log(req.headers.cookie);
  const sessionId = req.headers.cookie?.split("=")[1];
  const userSession = sessions[sessionId]; //baza
  //authorization
  if (!userSession) {
    return res.status(403).send({ message: "you don't have acces" });
  }
  const userId = userSession.userId;
  res.send({ userId });
};
