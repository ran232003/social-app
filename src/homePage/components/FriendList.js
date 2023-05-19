import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import UserImage from "../../globalComponents/UserImage";

const FriendList = (props) => {
  const { user } = props;

  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: "10px",
        borderRadius: "0.75rem",
        mt: "20px",
      }}
    >
      <Typography
        variant="h5"
        noWrap
        sx={{ mt: "10px" }}
        color={theme.palette.neutral.dark}
      >
        Friend List
      </Typography>
      <Box sx={{ mt: "10px" }}>
        {user.friends.map((friend, index) => {
          return (
            <Box key={index} sx={{ mt: "10px", display: "flex" }}>
              <UserImage pic={friend.pic} />
              <Box className="rightDetails">
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ ml: "10px" }}
                  color={theme.palette.neutral.dark}
                >
                  {friend.name}
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ ml: "10px" }}
                  color={theme.palette.neutral.medium}
                >
                  {friend.occupation}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FriendList;
