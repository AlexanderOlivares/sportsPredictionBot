import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import DatePicker from "../ui/GameDatePicker";
import Spinner from "../ui/Spinner";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FourOhFour from "../ui/404";
import ScrollToTop from "../helpers/ScrollToTop";
import PopUpDialog from "../ui/PopUpDialog";
import FilterModal from "../ui/FilterModal";
import Scoreboard from "../ui/ScoreBoard";
import useFilters, { toggleModal, clearFilter } from "../helpers/UseFilters";

const Nba: React.FC = () => {
  const [gameDate, setGameDate] = useState<string>("");
  const message = `No predictions match this filter for ${gameDate}`;

  const {
    isLoading,
    openPopUpDialog,
    displayedPredictionData,
    filters,
    setFilters,
    openFilterModal,
    setOpenFilterModal,
    displayFetchError,
    closePopUpDialog,
    fetchGamePredictions,
  } = useFilters();

  useEffect(() => {
    const [month, day, year] = gameDate.split(" ");
    const date = `${month} ${day}`;
    fetchGamePredictions(`/api/nba-date/${year}/${date}`);
  }, [gameDate]);

  return (
    <>
      <Box m={2}>
        <DatePicker setGameDate={setGameDate} />
      </Box>
      {displayedPredictionData && (
        <Box pt={1}>
          {filters.favorite || filters.underdog ? (
            <Button onClick={() => clearFilter(setFilters)}>Clear Filter</Button>
          ) : (
            <Button onClick={() => toggleModal(setOpenFilterModal)}>
              <FilterAltOutlinedIcon />
            </Button>
          )}
        </Box>
      )}
      {
        <FilterModal
          openFilterModal={openFilterModal}
          toggleModal={() => toggleModal(setOpenFilterModal)}
          filters={filters}
          setFilters={setFilters}
        />
      }
      {!isLoading && (
        <Box p={3}>
          <Typography variant="h4">NBA</Typography>
        </Box>
      )}
      <Scoreboard displayedPredictionData={displayedPredictionData} />
      {isLoading && <Spinner />}
      {!isLoading && displayFetchError && <FourOhFour />}
      {!isLoading && displayedPredictionData && <ScrollToTop />}
      {openPopUpDialog && (
        <PopUpDialog
          message={message}
          openPopUpDialog={openPopUpDialog}
          closePopUpDialog={closePopUpDialog}
        />
      )}
    </>
  );
};

export default Nba;
