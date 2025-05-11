const authModel = require("../models/auth.model");
const bcrypt = require("bcrypt");

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const findAuth = await authModel.findOne({ email });
    if (!findAuth) {
      return res.status(401).send({ message: "author not found" });
    }
    const isMatchPassword = bcrypt.compareSync(password, findAuth.password);
    if (!isMatchPassword) {
      return res
        .status(400)
        .send({ message: "email or password is incorrect" });
    }

    res.status(200).send({ data: findAuth });
  } catch (error) {
    console.log("error:", error.message);
  }
}

async function register(req, res) {
  const data = req.body;
  try {
    const findAuth = await authModel.findOne({ email: data.email });
    if (findAuth) {
      res
        .status(301)
        .send({ message: "user already exists i mean with this email." });
    }

    const hashPassword = bcrypt.hashSync(data.password, 10);

    const newAuth = await authModel.create({ ...data, password: hashPassword });

    // data.password = hashPassword;
    res.status(201).send({ data: newAuth });
  } catch (error) {
    console.log("error: ", error.message);
  }
}

module.exports = {
  login,
  register,
};

