import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SvgIconProps } from "@mui/material";
import { Link } from "react-router-dom";

interface HomeCardProps {
  SportIcon: (props: SvgIconProps) => JSX.Element;
  headline: string;
  body: string;
  path: string;
  buttonText: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  SportIcon,
  headline,
  body,
  path,
  buttonText,
}: HomeCardProps) => {
  return (
    <>
      <Card variant="outlined" sx={{ m: 1 }}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            {headline}
          </Typography>
          <Box>
            <SportIcon sx={{ fontSize: 150 }}></SportIcon>
          </Box>
          <CardContent>
            <Box>
              <Typography variant="body1" color="text.secondary">
                {body}
              </Typography>
            </Box>
          </CardContent>
          <Box pb={2}>
            {buttonText && (
              <Button component={Link} to={path} variant="contained">
                {buttonText}
              </Button>
            )}
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};

export default HomeCard;
