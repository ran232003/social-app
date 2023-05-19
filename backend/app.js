import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/user-schema.js";
import userRoutes from "./routes/user-routes.js";
import postRoutes from "./routes/post-routes.js";
import { posts } from "./mockData.js";
import Post from "./models/post-schema.js";
/// config

//grab the file url
const __filename = fileURLToPath(import.meta.url);
//we can use dir name
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
//USING DONENV
const port = process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
//USING DONENV
mongoose.connect(process.env.MONGO_URL);
//
app.use(cors());
//app.use("/uploads/images", express.static(__dirname + "/uploads/images"));
//store the files here
app.use(
  "/public/assets",
  express.static(path.join(__dirname, "/public/assets"))
);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.use((req, res, error, next) => {
  console.log("error controller", error.message);
  const errorCode = error.code || 500;
  const errorMsg = error.message || "unknown error occurd";
  //res.status(errorCode);
  res.json({ status: "fail", message: error.message });
});

// const f = async () => {
//   try {
//     const p = posts[0];
//     console.log(p);
//     const post = new Post({
//       likes: p.likes,
//       userPicturePath: p.userPicturePath,
//       picturePath: p.picturePath,
//       description: p.description,
//       location: p.location,
//       lastName: p.lastName,
//       firstName: p.firstName,
//       userId: p.userId,
//       comments: p.comments,
//     });
//     const a = await post.save();
//     console.log("res", a);
//   } catch (error) {}
// };
// f();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
