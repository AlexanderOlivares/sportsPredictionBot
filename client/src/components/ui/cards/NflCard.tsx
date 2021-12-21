import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import images from "../../../assets/images";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface CardProps {
  game: {
    away_predicted: string;
    away_team: string;
    favored_team: string;
    home_predicted: string;
    home_team: string;
    pick: string;
    vegas_line: string;
  };
}

const NflCard: React.FC<CardProps> = ({ game }) => {
  //   const { away_team }: { away_team: string } = game;
  //   const away = game.away_team;
  //   console.log(images[`${away}`]);
  //   //   console.log(game.away_team);
  //   console.log(images[game.away_team]);
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src={images[game.away_team]} alt={`${game.away_team} logo`} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Away
          </Typography>
          <Typography variant="h5" component="div">
            {game.away_team}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {game.away_predicted}
          </Typography>
          <Typography variant="body2">
            Line {game.favored_team} -{game.vegas_line}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Home
          </Typography>
          <img src={images[game.home_team]} alt={`${game.home_team} logo`} />
          <Typography variant="h5" component="div">
            {game.home_team}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {game.home_predicted}
          </Typography>
          <Typography variant="h5" component="div">
            Pick: {game.pick}
          </Typography>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </>
  );
};

export default NflCard;
