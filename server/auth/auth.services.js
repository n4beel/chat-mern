const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("./auth.model");


const signup = async (req) => {
  try {
    const uniqueMail = await User.findOne({ email: req.body.email });
    console.log(uniqueMail);
    if (!uniqueMail) {
      req.body.hash = bcrypt.hashSync(req.body.password, 8);
      delete req.body.password;
      console.log(req.body);
      const user = await User.create(req.body);
      return user;
    } else {
      throw "User Already Exist";
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const login = async (req) => {
  try {
    const getUser = await User.findOne({ email: req.body.email });
    if (!getUser) {
      throw "User Doesnot Exist";
    }
    if (!bcrypt.compareSync(req.body.password, getUser.hash))
      throw "Wrong Password";
    const token = jwt.sign({ email: getUser.email }, process.env.SECRET, {
      expiresIn: "1h",
    });
    const user = {
      getUser,
      token,
    };
    return user;
  } catch (e) {
    console.log(e);
    throw (e);
  }
};

module.exports = {
  signup,
  login
};
