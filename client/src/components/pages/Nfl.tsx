import React, { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material/Select";
import { weeks, seasons } from "../../seasonStructure/nflSeason";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FourOhFour from "../ui/404";
import ScrollToTop from "../helpers/ScrollToTop";
import PopUpDialog from "../ui/PopUpDialog";
import FilterModal from "../ui/FilterModal";
import SelectForm from "../ui/SelectForm";
import Scoreboard from "../ui/ScoreBoard";
import useFilters, { toggleModal, clearFilter } from "../helpers/UseFilters";

export const displayTheWordWeek = (week: string) => (Number(week) ? "Week" : "");
export const removeUnderscores = (week: string) =>
  week
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const Nfl: React.FC = () => {
  const latestWeek: string = weeks[weeks.length - 1];
  const latestSeason: string = seasons[seasons.length - 1];
  const [season, setSeason] = useState<string>(latestSeason);
  const [week, setWeek] = useState<string>(latestWeek);
  const [displayWeeks, setDisplayWeeks] = useState<string[]>(weeks);
  const message = `No predictions match this filter for ${displayTheWordWeek(
    week
  )} ${removeUnderscores(week)}`;

  const {
    isLoading,
    setIsLoading,
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

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value }: { name: string; value: string } = event.target;
    name === "week" ? setWeek(value) : setSeason(value);
  };

  useEffect(() => {
    setIsLoading(true);

    // This project started at week 14 of the 2021-2022 season. Hiding all weeks before then
    season == "2021-2022"
      ? setDisplayWeeks(weeks.slice(14)) // SET TO 17 ***************
      : setDisplayWeeks(weeks);

    // fetchGamePredictions(`/api/nfl-week/${week}`);
    fetchGamePredictions(`/api/nfl/${season}/${week}`);
    setIsLoading(false);
  }, [season, week]);

  return (
    <>
      <Box pt={2} className="nfl" justifyContent="center" alignItems="center">
        <SelectForm
          label={"season"}
          value={season}
          timeRange={seasons}
          handleSelectChange={handleSelectChange}
        />
        <SelectForm
          label={"week"}
          value={week}
          timeRange={displayWeeks}
          handleSelectChange={handleSelectChange}
        />
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
          <Typography variant="h4">
            NFL {displayTheWordWeek(week)} {removeUnderscores(week)}
          </Typography>
        </Box>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <Scoreboard displayedPredictionData={displayedPredictionData} />
      )}
      {!isLoading && displayFetchError && (
        <FourOhFour dateOrWeek={removeUnderscores(week)} />
      )}
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

export default Nfl;
