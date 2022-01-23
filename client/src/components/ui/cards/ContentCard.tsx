import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IContentCardData } from "../../../assets/textContent/homeCardContent";

const ContentCard: React.FC<IContentCardData> = ({
  Icon,
  headline,
  body,
  path,
  buttonText,
}: IContentCardData) => {
  const openExternalLink = (externalLink: string) => window.open(externalLink);
  const isRelativePath = (path: string) => !path.startsWith("https://");
  return (
    <>
      <Card variant="outlined" sx={{ m: 1 }}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div">
            {headline}
          </Typography>
          <Box>
            <Icon sx={{ fontSize: 150 }}></Icon>
          </Box>
          <CardContent>
            <Box>
              <Typography variant="body1" color="text.secondary">
                {body}
              </Typography>
            </Box>
          </CardContent>
          {buttonText && (
            <Box pb={2}>
              {isRelativePath(path) ? (
                <Button component={Link} to={path} variant="contained">
                  {buttonText}
                </Button>
              ) : (
                <Button onClick={() => openExternalLink(path)} variant="contained">
                  {buttonText}
                </Button>
              )}
            </Box>
          )}
        </CardActionArea>
      </Card>
    </>
  );
};

export default ContentCard;
