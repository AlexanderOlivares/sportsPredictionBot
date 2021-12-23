import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import images from "../../../assets/images";

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

const makeFortyNinersSF = (team: string) => (team === "49ers" ? "SF" : team);

const NflCard: React.FC<CardProps> = ({ game }) => {
  const { away_team, home_team }: { away_team: string; home_team: string } = game;

  const awayTeam = makeFortyNinersSF(away_team);
  const homeTeam = makeFortyNinersSF(home_team);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box className="nfl-card">
            <Box className="card-box">
              <Typography variant="body1">Away</Typography>
              <Box className="nfl-logo-container">
                <Box className="nfl-logo">
                  <img src={images[awayTeam]} alt={`${game.away_team} logo`} />
                </Box>
              </Box>
              <Typography variant="h5" component="div">
                {game.away_team}
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
                    {game.favored_team} -{game.vegas_line}
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
                  <img src={images[homeTeam]} alt={`${game.home_team} logo`} />
                </Box>
              </Box>
              <Typography variant="h5" component="div">
                {game.home_team}
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
              {game.pick}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default NflCard;
