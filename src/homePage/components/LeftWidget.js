import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import UserImage from "../../globalComponents/UserImage";
import "../HomePage.css";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { display } from "@mui/system";
const LeftWidget = (props) => {
  const theme = useTheme();
  const { user } = props;
  //console.log(user);
  return (
    <div
      className="mainLeft"
      style={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          ml: "10px",
        }}
      >
        <Box sx={{ display: "flex" }} className="first">
          <Box className="imageAndDetails">
            <UserImage pic={user.pic} />
            <Box>
              <Typography
                variant="h3"
                noWrap
                sx={{
                  ml: "15px",
                }}
                color={theme.palette.neutral.dark}
              >
                {user.name}
              </Typography>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: "15px",
                }}
                color={theme.palette.neutral.medium}
              >
                {user?.friends.length} friends
              </Typography>
            </Box>
          </Box>
          <Box className="icons">
            <ManageAccountsIcon style={{ fontSize: 30 }} />
          </Box>
        </Box>
        <hr className="hr" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <LocationOnOutlinedIcon style={{ fontSize: 30 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: "15px",
            }}
            color={theme.palette.neutral.medium}
          >
            {user.location}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "10px",
          }}
        >
          {" "}
          <WorkOutlineIcon style={{ fontSize: 30 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: "15px",
            }}
            color={theme.palette.neutral.medium}
          >
            {user.occupation}
          </Typography>
        </Box>
        <hr className="hr" />
        <Box
          className="thirdSec"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "10px",
            mt: "10px",
          }}
        >
          {" "}
          <Typography
            variant="h5"
            noWrap
            sx={{}}
            color={theme.palette.neutral.medium}
          >
            profile views
          </Typography>
          <Typography
            variant="h5"
            noWrap
            sx={{}}
            color={theme.palette.neutral.dark}
          >
            124345
          </Typography>
        </Box>
        <Box
          className="thirdSec"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            variant="h5"
            noWrap
            sx={{}}
            color={theme.palette.neutral.medium}
          >
            post impressions
          </Typography>
          <Typography
            variant="h5"
            noWrap
            sx={{}}
            color={theme.palette.neutral.dark}
          >
            2123
          </Typography>
        </Box>
        <hr />
        <Typography
          variant="h5"
          noWrap
          sx={{ mt: "10px" }}
          color={theme.palette.neutral.dark}
        >
          Social Profiles
        </Typography>
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: "10px", display: "flex" }} className="leftSide">
            <Box className="iconLeft" sx={{ padding: "5px" }}>
              <img src={linkedin} alt="linkedin" />
            </Box>
            <Box className="rightDetails">
              <Typography
                variant="h6"
                noWrap
                sx={{ ml: "10px" }}
                color={theme.palette.neutral.dark}
              >
                Linkedin
              </Typography>
              <Typography
                variant="h6"
                noWrap
                sx={{ ml: "10px" }}
                color={theme.palette.neutral.medium}
              >
                Network Platform
              </Typography>
            </Box>
          </Box>
          <Box className="rightSide">
            <ModeEditIcon />
          </Box>
        </Box>
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ mt: "10px", display: "flex" }} className="leftSide">
            <Box className="iconLeft" sx={{ padding: "5px" }}>
              <img src={twitter} alt="twitter" />
            </Box>
            <Box className="rightDetails">
              <Typography
                variant="h6"
                noWrap
                sx={{ ml: "10px" }}
                color={theme.palette.neutral.dark}
              >
                Twitter
              </Typography>
              <Typography
                variant="h6"
                noWrap
                sx={{ ml: "10px" }}
                color={theme.palette.neutral.medium}
              >
                Social Network
              </Typography>
            </Box>
          </Box>
          <Box className="rightSide">
            <ModeEditIcon />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LeftWidget;
