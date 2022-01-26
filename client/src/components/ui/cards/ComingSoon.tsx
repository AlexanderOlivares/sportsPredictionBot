import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";

interface ComingSoonProps {
  message: string;
}

const ComingSoonCard: React.FC<ComingSoonProps> = ({ message }) => {
  return (
    <>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
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
      </Box>
    </>
  );
};

export default ComingSoonCard;
