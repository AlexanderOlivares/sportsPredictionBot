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

export interface IPredictionData {
  game_date: string;
  away_predicted: string;
  away_team: string;
  favored_team: string;
  home_predicted: string;
  home_team: string;
  pick: string;
  vegas_line: string;
}

export interface IFilterOptions {
  favorite: Boolean;
  underdog: Boolean;
}

export const displayTheWordWeek = (week: string) => (Number(week) ? "Week" : "");
export const removeUnderscores = (week: string) =>
  week
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

export const filterPredictionResults = (
  displayedPredictionData: IPredictionData[],
  filters: IFilterOptions
) => {
  if (filters.favorite) {
    return displayedPredictionData.filter(game => game.pick.includes("-"));
  }
  if (filters.underdog) {
    return displayedPredictionData.filter(game => game.pick.includes("+"));
  }
  return displayedPredictionData;
};

export const toggleModal = (
  setOpenFilterModal: React.Dispatch<React.SetStateAction<boolean>>
) => setOpenFilterModal(prev => !prev);

export const clearFilter = (
  setFilters: React.Dispatch<React.SetStateAction<IFilterOptions>>
) => setFilters({ favorite: false, underdog: false });

const Nfl: React.FC = () => {
  const latestWeek: string = weeks[weeks.length - 1];
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [year, setYear] = useState<string>("");
  const [week, setWeek] = useState<string>(latestWeek);
  const [displayedPredictionData, setDisplayedPredictionData] = useState<
    IPredictionData[] | null
  >(null);
  const [completePredictionData, setCompletePredictionData] = useState<
    IPredictionData[] | null
  >(null);
  const [filters, setFilters] = useState<IFilterOptions>({
    favorite: false,
    underdog: false,
  });
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  const [openPopUpDialog, setOpenPopUpDialog] = useState<boolean>(false);
  const [displayFetchError, setDisplayFetchError] = useState<boolean>(false);
  const message = `No predictions match this filter for ${displayTheWordWeek(
    week
  )} ${removeUnderscores(week)}`;

  const closePopUpDialog = () => {
    setDisplayedPredictionData(completePredictionData);
    clearFilter(setFilters);
    setOpenPopUpDialog(false);
  };

  const getNflPredictions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/nfl-week/${week}`, {
        method: "GET",
      });
      const predictions: IPredictionData[] = await response.json();
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

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value }: { name: string; value: string } = event.target;
    name === "week" ? setWeek(value) : setYear(value);
  };

  useEffect(() => {
    getNflPredictions();
  }, [week]);

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
