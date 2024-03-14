const bcrypt = require("bcrypt");
const User = require("../models/user-model");

const home = (req, res) => {
  res.status(200).send("Welcome to MERN app Using controllers");
};
const register = async (req, res) => {
  //   res.status(200).send("Welcome to register page");
  try {
    const { username, email, phone, password } = req.body;

    // check if user already exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exist" });
    }

    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    //if not, then create new user with this four fields
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    res.status(200).json({
      msg: "Registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json("Internal server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    // check if user is already registered, if not
    if (!userExist) {
      res.status(400).json({ message: "Invalid Credentials" });
    }
    // match password
    const user = await bcrypt.compare(password, userExist.password);

    // if user found
    if (user) {
      res.status(200).json({
        msg: "Login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }
  } catch (error) {
    res.status(400).json("Internal server error");
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json(userData);
  } catch (error) {
    console.log(`Error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };

// Consolas, 'Courier New', monospace
