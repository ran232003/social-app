import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import UserImage from "../../globalComponents/UserImage";
import "../HomePage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const PostItem = (props) => {
  const theme = useTheme();

  const {
    picturePath,
    location,
    likes,
    lastName,
    firstName,
    description,
    id,
    userPicturePath,
  } = props;
  return (
    <Box
      className="mainPost"
      sx={{
        padding: "1.5rem 1.5rem 0.75rem 1.5rem",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.75rem",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <UserImage pic={userPicturePath} />
        <Box>
          <Typography
            variant="h6"
            noWrap
            sx={{
              ml: "10px",
              cursor: "pointer",
              ":hover": { color: theme.palette.primary.main },
            }}
            color={theme.palette.neutral.dark}
          >
            {firstName} {lastName}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            sx={{ ml: "10px" }}
            color={theme.palette.neutral.medium}
          >
            {location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "1.5rem 1.5rem 0.75rem 1.5rem",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.75rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mt: "1rem" }}
          color={theme.palette.neutral.dark}
        >
          {" "}
          {description}
        </Typography>
      </Box>
      <Box>
        <img
          src={picturePath}
          alt="new"
          width="100%"
          height="100%"
          style={{ cursor: "pointer", borderRadius: "5%" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FavoriteBorderIcon sx={{ mt: "1rem" }} />
          <Typography
            variant="h6"
            sx={{ mt: "1rem", ml: "10px" }}
            color={theme.palette.neutral.dark}
          >
            6
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
        >
          <ChatBubbleOutlineIcon sx={{ mt: "1rem", ml: "20px" }} />
          <Typography
            variant="h6"
            sx={{ mt: "1rem", ml: "10px" }}
            color={theme.palette.neutral.dark}
          >
            6
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PostItem;
