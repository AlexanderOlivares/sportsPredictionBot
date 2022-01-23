import React, { useState, useEffect } from "react";
import NflCard from "../ui/cards/NflCard";
import Spinner from "../ui/Spinner";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Grid from "@mui/material/Grid";
import { getCurrentNflWeek, weeks, years } from "../../seasonStructure/nflSeason";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import GlobalStyles from "../GlobalStyles";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

interface IPredictionData {
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
const scrollToTop = () => window.scrollTo(0, 0);
const latestWeek: string = weeks[weeks.length - 1];

const Nfl: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [year, setYear] = useState<string>("");
  const [week, setWeek] = useState<string>(latestWeek);
  const [displayedPredictionData, setDisplayedPredictionData] =
    useState<IPredictionData[]>();
  const [completePredictionData, setCompletePredictionData] =
    useState<IPredictionData[]>();
  const [filters, setFilters] = useState<IFilterOptions>({
    favorite: false,
    underdog: false,
  });
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => setOpen(prev => !prev);
  const clearFilter = () => setFilters({ favorite: false, underdog: false });

  const filterPredictionResults = (
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

  const getNflScores = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/nfl-week/${week}`, {
        method: "GET",
      });
      const predictions = await response.json();
      setCompletePredictionData(predictions);
      setDisplayedPredictionData(filterPredictionResults(predictions, filters));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked }: { name: string; checked: boolean } = event.target;
    setFilters(prev => ({ ...prev, [name]: checked }));
    toggleModal();
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value }: { name: string; value: string } = event.target;
    name === "week" ? setWeek(value) : setYear(value);
  };

  useEffect(() => {
    getNflScores();
    getCurrentNflWeek()
      .then(week => {
        if (week && weeks.includes(week)) {
          setWeek(week);
        }
      })
      .catch(console.log);
  }, [week]);

  useEffect(() => {
    if (!completePredictionData) return;
    const filtered = filterPredictionResults(completePredictionData, filters);
    setDisplayedPredictionData(filtered);
  }, [filters]);

  return (
    <>
      <Box pt={2} className="nfl" justifyContent="center" alignItems="center">
        {/* <Box className="form-select">
          <FormControl fullWidth>
            <InputLabel id="select-nfl-year">Year</InputLabel>
            <Select
              value={year}
              label={"year"}
              name="year"
              onChange={handleSelectChange}
            >
              {years.map(option => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box> */}
        <Box className="form-select">
          <FormControl fullWidth>
            <InputLabel id="select-nfl-week">Week</InputLabel>
            <Select
              value={week}
              label={"week"}
              name="week"
              onChange={handleSelectChange}
              MenuProps={{ sx: { maxHeight: 500 } }}
            >
              {weeks.map(option => {
                return (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box pt={1}>
        {filters.favorite || filters.underdog ? (
          <Button onClick={clearFilter}>Clear Filter</Button>
        ) : (
          <Button onClick={toggleModal}>
            <FilterAltOutlinedIcon />
          </Button>
        )}
      </Box>
      <Box>
        <Modal
          open={open}
          onClose={toggleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={GlobalStyles.nflModal}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              Filter By
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl>
                <Box m={2}>
                  <FormGroup row={true}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={filters.favorite}
                          onChange={handleCheckboxes}
                          color="secondary"
                          name="favorite"
                        />
                      }
                      label="Favorite"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={filters.underdog}
                          onChange={handleCheckboxes}
                          color="secondary"
                          name="underdog"
                        />
                      }
                      label="Underdog"
                      labelPlacement="top"
                    />
                  </FormGroup>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </Modal>
      </Box>
      {!isLoading && (
        <Box p={3}>
          <Typography variant="h4">
            NFL {displayTheWordWeek(week)} {week}
          </Typography>
        </Box>
      )}
      {isLoading && <Spinner />}
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          {displayedPredictionData &&
            displayedPredictionData.map((game, index) => {
              return (
                <Grid item lg={2}>
                  <NflCard key={index} game={game} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
      {!isLoading && (
        <IconButton aria-label="scroll to top" onClick={scrollToTop}>
          <ArrowCircleUpIcon />
        </IconButton>
      )}
    </>
  );
};

export default Nfl;
