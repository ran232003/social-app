import multer from "multer";
import { uuid } from "uuidv4";
const fileType = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const checkFile = (req, file, cb) => {
  console.log("filter");
  let fileExtansion = fileType[file.mimetype];
  if (!fileExtansion) {
    const err = new Error("file extension error");
    cb(err, false);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    //taking only the file extension and put random uuid.
    //that way we can upload the same pic

    let fileExtansion = fileType[file.mimetype];

    console.log(file, "here3");
    cb(null, uuid() + "." + fileExtansion);
  },
  // fileFilter: (req, file, cb) => {
  //   console.log("fileFilter inside");
  //   if (fileType[file.mimetype]) {
  //     return cb(null, true);
  //   }
  //   cb(new Error('Only ".zip" is allowed'));
  // },
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
