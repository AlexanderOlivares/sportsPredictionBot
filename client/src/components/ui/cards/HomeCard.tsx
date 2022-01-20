import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

interface HomeCardProps {
  image: string;
  headline: string;
  body: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  image,
  headline,
  body,
}: HomeCardProps) => {
  return (
    <>
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="alt text" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {headline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default HomeCard;
