import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const RightWidget = (props) => {
  const theme = useTheme();
  return (
    <Box
      className="mainPost2"
      sx={{
        backgroundColor: theme.palette.background.alt,
        padding: "1.5rem 1.5rem 0.75rem 1.5rem",
        borderRadius: "0.75rem",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          ml: "10px",
        }}
      >
        <Typography
          variant="h5"
          noWrap
          sx={{
            mb: "15px",
          }}
          color={theme.palette.neutral.dark}
        >
          Sponsored
        </Typography>
        <Box>
          <img
            src="http://localhost:5000/public/assets/download.jpeg"
            alt="new"
            width="100%"
            height="100%"
            style={{ cursor: "pointer", borderRadius: "5%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "10px",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mb: "15px",
            }}
            color={theme.palette.neutral.dark}
          >
            Coca Cola
          </Typography>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mb: "15px",
            }}
            color={theme.palette.neutral.medium}
          >
            cocacola.com
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.75rem",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              mb: "15px",
            }}
            color={theme.palette.neutral.medium}
          >
            Coca-Cola is the Best!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RightWidget;
