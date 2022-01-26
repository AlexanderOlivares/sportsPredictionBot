import React from "react";
import Box from "@mui/material/Box";
import ComingSoonCard from "../ui/cards/ComingSoon";

const About: React.FC = () => {
  const message: string = "NBA bot is currently in development";
  return (
    <>
      <Box m={2}>
        <ComingSoonCard message={message} />
      </Box>
    </>
  );
};

export default About;
