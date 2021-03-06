import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import useMediaQuery from "../../helpers/UseMediaQuery";
import Grid from "@mui/material/Grid";

interface ComingSoonProps {
  message: string;
}

const ComingSoonCard: React.FC<ComingSoonProps> = ({ message }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        <Grid item lg={2}>
          <Card variant="outlined" sx={{ m: 1, width: isMobile ? 345 : 550 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coming Soon!
              </Typography>
              <HandymanOutlinedIcon sx={{ fontSize: 150 }} />
              <Typography variant="body2" color="text.secondary">
                {message}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ComingSoonCard;
