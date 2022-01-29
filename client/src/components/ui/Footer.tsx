import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <>
      <Box m={2}>
        <Typography variant="caption">
          Prediction bot is not a gambling advice. It is intended for enterntainment
          purposes only.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
