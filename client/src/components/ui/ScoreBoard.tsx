import React, { useState, useEffect } from "react";
import GameCard from "../ui/cards/GameCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IPredictionData } from "../pages/Nfl";
import { BindingOrAssignmentElementRestIndicator } from "typescript";

interface IScoreboardProps {
  displayedPredictionData: IPredictionData[] | null;
}

const Scoreboard: React.FC<IScoreboardProps> = ({ displayedPredictionData }) => {
  return (
    <>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          {displayedPredictionData?.length &&
            displayedPredictionData.map((game, index) => {
              return (
                <Grid item lg={2}>
                  <GameCard key={index} game={game} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
      ;
    </>
  );
};

export default Scoreboard;
