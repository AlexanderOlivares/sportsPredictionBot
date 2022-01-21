import React from "react";
import Box from "@mui/material/Box";
import HomeCard from "../ui/cards/HomeCard";
import { HomeCardData } from "../../assets/textContent/homeCardContent";

const Home: React.FC = () => {
  return (
    <>
      <Box m={2}>
        {HomeCardData.map(card => {
          return (
            <HomeCard
              SportIcon={card.SportIcon}
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
