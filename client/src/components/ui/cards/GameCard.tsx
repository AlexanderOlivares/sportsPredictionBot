import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import images from "../../../assets/images";
import theme from "../Theme";

const secondary = theme.palette.secondary.main;
export const changeTeamDisplayName = (team: string) => {
  if (team === "Timberwolves") return "T-Wolves";
  if (team === "49ers") return "SF";
  return team;
};

export const isUnderdogOutrightWinner = (
  home: string,
  home_predicted: string,
  away_predicted: string,
  fav: string
): boolean => {
  if (Number(away_predicted) === Number(home_predicted)) {
    return false;
  }
  if (home === fav) {
    return Number(away_predicted) > Number(home_predicted);
  }
  return Number(home_predicted) > Number(away_predicted);
};

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

const GameCard: React.FC<CardProps> = ({ game }) => {
  const [upset, setUpset] = useState<boolean>(false);
  const { away_team, home_team }: { away_team: string; home_team: string } = game;
  const awayTeam = changeTeamDisplayName(away_team);
  const homeTeam = changeTeamDisplayName(home_team);
  const [pick, spread] = game.pick.split(" ");

  useEffect(() => {
    const isUpset = isUnderdogOutrightWinner(
      homeTeam,
      game.home_predicted,
      game.away_predicted,
      changeTeamDisplayName(game.favored_team)
    );
    setUpset(isUpset);
  }, [game]);

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          minWidth: 345,
          maxWidth: 345,
          border: upset ? `2px solid ${secondary}` : "none",
        }}
      >
        <CardContent>
          <Box className="nfl-card">
            <Box className="card-box">
              <Typography variant="body1">Away</Typography>
              <Box className="nfl-logo-container">
                <Box className="nfl-logo">
                  <img src={images[game.away_team]} alt={`${game.away_team} logo`} />
                </Box>
              </Box>
              <Typography variant="h5" component="div">
                {awayTeam}
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Predicted
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {game.away_predicted}
              </Typography>
            </Box>
            <Box className="card-box">
              <Box>
                <Box className="line">
                  <Typography variant="body1">Line</Typography>
                </Box>
                <Box>
                  <Typography variant="body1">
                    {changeTeamDisplayName(game.favored_team)} -{game.vegas_line}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography className="vs" variant="h5">
                  vs.
                </Typography>
              </Box>
            </Box>
            <Box className="card-box">
              <Typography variant="body1">Home</Typography>
              <Box className="nfl-logo-container">
                <Box className="nfl-logo">
                  <img src={images[game.home_team]} alt={`${game.home_team} logo`} />
                </Box>
              </Box>
              <Typography variant="h5" component="div">
                {homeTeam}
              </Typography>
              <Typography sx={{ mt: 1.5 }} color="text.secondary">
                Predicted
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {game.home_predicted}
              </Typography>
            </Box>
          </Box>
          <Box className="pick">
            <Typography variant="body2">Pick</Typography>
            <Typography variant="h5" component="div">
              {`${changeTeamDisplayName(pick)} `}
              {spread && spread}
            </Typography>
          </Box>
          {upset && (
            <Box className="underdog-winner" p={1}>
              <Typography variant="body2">Underdog Straight Up Winner</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;