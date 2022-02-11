import React, { useState, useEffect } from "react";
import Spinner from "../ui/Spinner";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material/Select";
import { weeks } from "../../seasonStructure/nflSeason";
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
  const [year, setYear] = useState<string>("");
  const [week, setWeek] = useState<string>(latestWeek);
  const message = `No predictions match this filter for ${displayTheWordWeek(
    week
  )} ${removeUnderscores(week)}`;

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

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value }: { name: string; value: string } = event.target;
    name === "week" ? setWeek(value) : setYear(value);
  };

  useEffect(() => {
    fetchGamePredictions(`/api/nfl-week/${week}`);
  }, [week]);

  return (
    <>
      <Box pt={2} className="nfl" justifyContent="center" alignItems="center">
        {/* SelectForm for years goes here for season 2 */}
        <SelectForm
          label={"week"}
          value={week}
          timeRange={weeks}
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

export default Nfl;
