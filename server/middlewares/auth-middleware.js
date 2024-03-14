const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  // get token from req
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, token is not provided" });
  }
  console.log(token);

  //   remove barear from token
  const jwtToken = token.replace("Bearer ", "");

  // console.log("jwtToken", jwtToken);

  try {
    // check whether token is verified or not. This will return the payload we have pass when we generate token
    const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    console.log("isVarified", isVarified);

    // if varified,  return user data from database
    const userData = await User.findOne({ email: isVarified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
  } catch (error) {
    console.log("error", error);
  }
  next();
};

module.exports = authMiddleware;
