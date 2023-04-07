import multer from "multer";
import { uuid } from "uuidv4";
const fileType = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    //taking only the file extension and put random uuid.
    //that way we can upload the same pic
    let fileExtansion = fileType[file.mimetype];
    cb(null, uuid() + "." + fileExtansion);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
