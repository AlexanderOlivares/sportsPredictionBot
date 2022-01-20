import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import HomeCard from "../ui/cards/HomeCard";
import { HomeCardData } from "../../assets/textContent/homeCardData";

const Home: React.FC = () => {
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
      {HomeCardData.map(card => {
        return (
          <HomeCard image={card.image} headline={card.headline} body={card.body} />
        );
      })}
    </>
  );
};

export default Home;
