import React from "react";
import Box from "@mui/material/Box";
import ComingSoonCard from "../ui/cards/ComingSoon";

const About: React.FC = () => {
  const message: string =
    "MLB bot will release ahead of the 2022 Major League season";
  return (
    <>
      <Box m={2}>
        <ComingSoonCard message={message} />
      </Box>
    </>
  );
};

export default About;
