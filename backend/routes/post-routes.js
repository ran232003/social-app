import express from "express";
import { upload } from "../middleware/file-upload.js";
import { addPost, getAllPosts } from "../controllers/post-controllers.js";
const router = express.Router();

router.post("/addPost", upload.single("file"), addPost);
router.get("/getAllPosts", getAllPosts);

export default router;
