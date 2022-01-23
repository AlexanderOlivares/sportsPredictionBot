import React from "react";
import Box from "@mui/material/Box";
import { AboutCardData } from "../../assets/textContent/aboutCardContent";
import ContentCard from "../ui/cards/ContentCard";

const About: React.FC = () => {
  return (
    <>
      <Box m={2}>
        {AboutCardData.map(card => {
          return (
            <ContentCard
              Icon={card.Icon}
              headline={card.headline}
              body={card.body}
              path={card.path}
              buttonText={card.buttonText}
            />
          );
        })}
      </Box>
    </>
  );
};

export default About;
