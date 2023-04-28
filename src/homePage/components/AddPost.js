import { Box, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import UserImage from "../../globalComponents/UserImage";
import "../HomePage.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { GifBoxOutlined, MicOutlined } from "@mui/icons-material";
import Dropzone from "react-dropzone";

const AddPost = (props) => {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [image, setImage] = useState();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const toggleInput = () => {
    setToggle(!toggle);
  };
  const { user } = props;
  const handleImage = () => {};
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          mt: "20px",
          display: "flex",
          padding: "20px",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <UserImage pic={user.pic} />
        <Box sx={{ ml: "20px", width: "100%" }}>
          <TextField
            InputProps={{ sx: { borderRadius: "20px" } }}
            className="textField"
            onChange={handleInput}
            value={input}
            fullWidth
            id="outlined-basic"
            label="Whats on your mind"
            variant="outlined"
          />
        </Box>
      </Box>
      <Box
        className="drop"
        sx={{
          ":hover": { backgroundColor: theme.palette.primary.main },
        }}
      >
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </Box>
      <hr className="hr" />
      <Box
        sx={{
          mt: "20px",
          display: "flex",
          padding: "15px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          onClick={toggleInput}
          className="postIcons"
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            // "&:hover": {
            //   borderRadius: "20px",
            //   color: "gray",
            //   backgroundColor: "lightblue",
            // },
          }}
        >
          {" "}
          <ImageOutlinedIcon style={{ fontSize: 20 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: "5px",
            }}
            color={theme.palette.neutral.medium}
          >
            Image
          </Typography>
        </Box>
        <Box
          className="postIcons"
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
          }}
        >
          {" "}
          <GifBoxOutlined style={{ fontSize: 20 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: "5px",
            }}
            color={theme.palette.neutral.medium}
          >
            Clip
          </Typography>
        </Box>
        <Box
          className="postIcons"
          sx={{
            display: "flex",
            cursor: "pointer",

            alignItems: "center",
          }}
        >
          {" "}
          <AttachFileOutlinedIcon style={{ fontSize: 20 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: "5px",
            }}
            color={theme.palette.neutral.medium}
          >
            Attachment
          </Typography>
        </Box>
        <Box
          className="postIcons"
          sx={{
            display: "flex",
            cursor: "pointer",

            alignItems: "center",
          }}
        >
          {" "}
          <MicOutlined style={{ fontSize: 20 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: "5px",
            }}
            color={theme.palette.neutral.medium}
          >
            Audio
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default AddPost;
