import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import DatePicker from "../ui/GameDatePicker";
import NflCard from "../ui/cards/NflCard";
import Spinner from "../ui/Spinner";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FourOhFour from "../ui/404";
import ScrollToTop from "../helpers/ScrollToTop";
import PopUpDialog from "../ui/PopUpDialog";
import FilterModal from "../ui/FilterModal";
import { IFilterOptions, IPredictionData, filterPredictionResults } from "./Nfl";

const Nba: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [gameDate, setGameDate] = useState<string>("");
  const [openPopUpDialog, setOpenPopUpDialog] = useState<boolean>(false);
  const [displayedPredictionData, setDisplayedPredictionData] = useState<
    IPredictionData[] | null
  >(null);
  const [completePredictionData, setCompletePredictionData] = useState<
    IPredictionData[] | null
  >(null);
  const [displayFetchError, setDisplayFetchError] = useState<boolean>(false);
  const [filters, setFilters] = useState<IFilterOptions>({
    favorite: false,
    underdog: false,
  });
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const message = `No predictions match this filter for ${gameDate}`;

  const toggleModal = () => setOpenFilterModal(prev => !prev);
  const clearFilter = () => setFilters({ favorite: false, underdog: false });

  const closePopUpDialog = () => {
    setDisplayedPredictionData(completePredictionData);
    clearFilter();
    setOpenPopUpDialog(false);
  };

  const getNflPredictions = async () => {
    try {
      setIsLoading(true);
      const [date, year] = gameDate.split(/(?<=\d)\s/);
      const response = await fetch(`/api/nba-date/${year}/${date}`, {
        method: "GET",
      });
      const predictions: IPredictionData[] = await response.json();
      console.log(predictions);
      if (!Array.isArray(predictions)) {
        setIsLoading(false);
        setDisplayedPredictionData(null);
        setDisplayFetchError(true);
        return;
      }
      setDisplayFetchError(false);
      setCompletePredictionData(predictions);
      const filtered = filterPredictionResults(predictions, filters);
      if (!filtered.length) {
        setOpenPopUpDialog(true);
      } else {
        setDisplayedPredictionData(filterPredictionResults(predictions, filters));
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNflPredictions();
  }, [gameDate]);

  useEffect(() => {
    if (!completePredictionData || !completePredictionData.length) {
      setIsLoading(false);
      return;
    }
    const filtered = filterPredictionResults(completePredictionData, filters);
    if (!filtered.length) {
      setOpenPopUpDialog(true);
      return;
    }
    setDisplayedPredictionData(filtered);
  }, [filters]);

  return (
    <>
      <Box m={2}>
        <DatePicker setGameDate={setGameDate} />
      </Box>
      {displayedPredictionData && (
        <Box pt={1}>
          {filters.favorite || filters.underdog ? (
            <Button onClick={clearFilter}>Clear Filter</Button>
          ) : (
            <Button onClick={toggleModal}>
              <FilterAltOutlinedIcon />
            </Button>
          )}
        </Box>
      )}
      {
        <FilterModal
          openFilterModal={openFilterModal}
          toggleModal={toggleModal}
          filters={filters}
          setFilters={setFilters}
        />
      }
      {!isLoading && (
        <Box p={3}>
          <Typography variant="h4">NBA</Typography>
        </Box>
      )}
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
                  <NflCard key={index} game={game} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
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
