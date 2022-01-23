import React from "react";
import Box from "@mui/material/Box";
import ContentCard from "../ui/cards/ContentCard";
import { HomeCardData } from "../../assets/textContent/homeCardContent";

const Home: React.FC = () => {
  return (
    <>
      <Box m={2}>
        {HomeCardData.map(card => {
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

export default Home;
