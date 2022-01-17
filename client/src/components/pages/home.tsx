import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

export default function Home() {
  return (
    <>
      <Box m={2}>
        <SmartToyOutlinedIcon sx={{ fontSize: 150 }}></SmartToyOutlinedIcon>
      </Box>
      <Box m={2}>
        <Typography variant="h4">Prediction Bot</Typography>
        <Typography>
          Prediction bot is an automated tool that scrapes predicted scores from the
          web and makes picks based on the Vegas betting line.
        </Typography>
      </Box>
    </>
  );
}
