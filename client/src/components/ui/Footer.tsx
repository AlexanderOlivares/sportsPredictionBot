import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <>
      <Box m={2}>
        <Typography variant="caption">
          Disclaimer: Prediction bot is not a gambling site of any kind. It is
          intended for enterntainment purposes only.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
