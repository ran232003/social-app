import express from "express";
import bodyParser from "body-parser";
import { posts } from "../mockData.js";
import Post from "../models/post-schema.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// {
//   input: 'as',
//   id: '64578cb07ef716260fba6eee',
//   picturePath: 'http://localhost:5000/public/assets/315ac855-4929-4c89-b786-3fe0ab64af40.jpeg',
//   occupation: 'Developer',
//   location: 'Kramim',
//   lastName: 'Farjun',
//   firstName: 'Ran',
//   email: 'ran@gmail.com'
// }
export const addPost = async (req, res, next) => {
  console.log("addPost backend");
  console.log(req.body, "addPost", req.file);

  let image = "http://localhost:5000/" + req.file.path.replace(/\\/g, "/");
  console.log(image);
  let post = new Post({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    location: req.body.location,
    picturePath: req.body.picturePath,
    userId: req.body.id,
    description: req.body.description,
    likes: {},
    comments: [],
    userPicturePath: req.body.userPicturePath,
  });
  await post.save();
  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
    posts: posts,
  });
};

export const getAllPosts = async (req, res, next) => {
  console.log("getAllPosts backend");

  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
    posts: posts,
  });
};

export const getMyPosts = async (req, res, next) => {
  console.log("getMyPosts backend");

  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
  });
};
