import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import User from "../models/user-schema.js";
import jwt from "jsonwebtoken";
const app = express();
const saltRounds = 10;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
export const login = async (req, res, next) => {
  console.log(req.body, "login");
  try {
    let checkUser = await User.findOne({ email: req.body.email });
    if (!checkUser) {
      return res.json({
        status: "fail",
        message: "Wrong Details",
      });
    }
    let passwordCheck = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (!passwordCheck) {
      return res.json({
        status: "fail",
        message: "Wrong Details",
      });
    }
    checkUser = checkUser.transform();
    console.log(checkUser, "checkUser");
    let token = jwt.sign(
      { id: checkUser.id, email: checkUser.email },
      "my-secret",
      {
        expiresIn: "1d",
      }
    );
    checkUser = { ...checkUser, token };
    return res.json({
      status: "ok",
      user: checkUser,
    });
  } catch (error) {
    return next(error);
  }

  return res.json({
    status: "ok",
  });
};
export const signup = async (req, res, next) => {
  console.log("signup backend");
  console.log(req.body, "signup", req.file);
  let image = "http://localhost:5000/" + req.file.path.replace(/\\/g, "/");
  const checkUser = await User.findOne({ email: req.body.email });
  console.log("checkUser", checkUser);
  if (checkUser) {
    return res.json({
      status: "fail",
      message: "Wrong Details",
    });
  }
  console.log(image);
  let hashPassword = await bcrypt.hash(req.body.password, 12);

  let newUser = new User({
    ...req.body,
    impressions: 0,
    viewedProfile: 0,
    friends: [],
    picturePath: image,
    password: hashPassword,
  });
  let token = jwt.sign({ id: newUser.id, email: newUser.email }, "my-secret", {
    expiresIn: "1d",
  });
  try {
    const response = await newUser.save();
  } catch (error) {
    console.error(error);
    return next(error);
  }
  newUser = newUser.transform();

  let returnUser = {
    ...req.body,
    token: token,
    impressions: 0,
    viewedProfile: 0,
    friends: [],
    pic: image,
    id: newUser.id,
  };
  console.log(newUser, returnUser);

  return res.json({
    status: "ok",
    user: returnUser,
  });
  // Store hash in your password DB.

  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
  });
};
export const getUser = async (req, res, next) => {
  console.log("getUser backend", req.params);
  let userId = req.params.userId;
  let user = await User.findById({ _id: userId });
  user = user.transform();
  console.log(user);
  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
    user: user,
  });
};

// user: {
//   name: "ran",
//   token: "123",
//   email: "ran@email.com",
//   id: "121",
//   pic: "http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg",
//   friends: [
//     {
//       name: "Dude",
//       occupation: "Master Of Puppets",
//       pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
//     },
//     {
//       name: "Dude2",
//       occupation: "Master Of Puppets2",
//       pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
//     },
//   ],
//   location: "Kramim",
//   occupation: "Developer",
// }
