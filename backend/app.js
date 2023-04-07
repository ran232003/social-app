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

app.use(cors());
//app.use("/uploads/images", express.static(__dirname + "/uploads/images"));
//store the files here
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
