import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
export const login = async (req, res, next) => {
  console.log(req.body, "login");
  return res.json({
    status: "ok",
    user: {
      name: "ran",
      token: "123",
      email: "ran@email.com",
      id: "121",
      pic: "http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg",
      friends: [
        {
          name: "Dude",
          occupation: "Master Of Puppets",
          pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        },
        {
          name: "Dude2",
          occupation: "Master Of Puppets2",
          pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        },
      ],
      location: "Kramim",
      occupation: "Developer",
    },
  });
};
export const signup = async (req, res, next) => {
  console.log(req.body, "signup", req.file);
  let image = "http://localhost:5000/" + req.file.path.replace(/\\/g, "/");
  console.log(image);
  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
    user: {
      name: "ran",
      token: "123",
      email: "ran@email.com",
      id: "121",
      pic: "http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg",
      friends: [
        {
          name: "Dude",
          occupation: "Master Of Puppets",
          pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        },
        {
          name: "Dude2",
          occupation: "Master Of Puppets2",
          pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        },
      ],
      location: "Kramim",
      occupation: "Developer",
    },
  });
};
export const getUser = async (req, res, next) => {
  console.log("getUser backend");

  //http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg
  return res.json({
    status: "ok",
    user: {
      name: "ran",
      token: "123",
      email: "ran@email.com",
      id: "121",
      pic: "http://localhost:5000/public/assets/e8b31127-5368-482f-9cb8-35b47c1d6154.jpeg",
      friends: [
        {
          name: "Dude",
          occupation: "Master Of Puppets",
          pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        },
        {
          name: "Dude2",
          occupation: "Master Of Puppets2",
          pic: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
        },
      ],
      location: "Kramim",
      occupation: "Developer",
    },
  });
};
