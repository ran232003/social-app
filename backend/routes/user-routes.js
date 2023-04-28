import { getUser, login, signup } from "../controllers/user-controller.js";

import express from "express";
import { upload } from "../middleware/file-upload.js";
const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/login", login);
router.get("/getUser", getUser);

export default router;
