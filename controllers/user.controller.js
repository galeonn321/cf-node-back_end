const userCtrl = {};
const userModel = require("../models/user.Model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { ObjectId } = require("mongodb");
const { generateToken, validateToken } = require("../helpers/generateToken");

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
}

async function decryptPassword(password, hashedPassword) {
  try {
    const decryptPass = await bcrypt.compare(password, hashedPassword);
    return decryptPass;
  } catch (error) {
    // Handle errors appropriately (e.g., log, throw, or return a value)
    res.status(500).json({
      ok: false,
      message: `Internal server error. ${error}`,
      data: "",
    });
  }
}

userCtrl.register = async (req, res) => {
  try {
    const userExists = await userModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (userExists) {
      return res.status(403).json({
        ok: false,
        message: "The username or email already exists.",
        data: "",
      });
    }

    const newObjectId = new ObjectId();

    const newUser = new userModel({
      userId: newObjectId,
      username: req.body.username,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    });

    await newUser.save();

    res.status(200).json({
      ok: true,
      message: "User registered successfully.",
      data: {
        newUser,
      },
    });
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({
      ok: false,
      message: "Internal server error.",
      data: "",
    });
  }
};

userCtrl.login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.username }],
    });
    if (user) {
      const matchPasswords = await decryptPassword(
        req.body.password,
        user.password
      );

      if (matchPasswords) {
        console.log("password match", matchPasswords);

        const token = generateToken(user);

        return res.status(200).json({
          ok: true,
          message: `Welcome back ${user.username}`,
          data: { token },
        });
      }
    }

    return res
      .status(404)
      .json({ ok: false, message: "No user found", data: "" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

userCtrl.getUserById = async (req, res) => {
  try {
    const token = req.body.token;
    const statusToken = validateToken(token);

    const userFound = await userModel.findOne({ userId: statusToken.userId });

    if (userFound) {
      const user = { ...userFound._doc };

      delete user.password;

      return res.status(200).json({
        ok: true,
        message: `User found`,
        data: user,
      });
    }

    return res.status(404).json({
      ok: false,
      message: "No user could be retrieved",
      data: "",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

userCtrl.authenticateUser = async (req, res) => {};

module.exports = userCtrl;
