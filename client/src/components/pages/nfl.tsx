import React, { useState, useEffect } from "react";
import BasicCard from "../ui/card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IYearAndWeek {
  year: string;
  week: string;
}
interface IPredictionData {
  away_predicted: string;
  away_team: string;
  favored_team: string;
  home_predicted: string;
  home_team: string;
  pick: string;
  vegas_line: string;
}

const Nfl: React.FC = () => {
  const years = ["2021", "2022", "2023"];
  const weeks = ["9", "10", "11", "12"];
  const [selectOptions, setSelectOptions] = useState<IYearAndWeek>({
    year: years[0],
    week: weeks[weeks.length - 1],
  });
  const [currentWeekDisplayed, setCurrentWeekDisplayed] = useState<string>(
    selectOptions.week
  );

  const [predictionData, setPredictionData] = useState<IPredictionData[]>();

  console.log(selectOptions);
  console.log(predictionData);

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value }: { name: string; value: string } = event.target;
    console.log(event.target);
    setSelectOptions(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getNflScores = async () => {
    try {
      let response = await fetch(
        `http://localhost:5000/api/nfl-week/${selectOptions.week}`,
        {
          method: "GET",
        }
      );
      const predictions = await response.json();
      setPredictionData(predictions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNflScores();
  }, []);

  return (
    <>
      <Box>
        <Box p={1} sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-nfl-year">Year</InputLabel>
            <Select
              value={selectOptions.year}
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
        </Box>
        <Box p={1} sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select-nfl-week">Week</InputLabel>
            <Select
              value={selectOptions.week}
              label={"week"}
              name="week"
              onChange={handleSelectChange}
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
        <Button variant="contained" onClick={getNflScores}>
          Go
        </Button>
      </Box>
      {/* prediction logic for cards goes here */}
      {/* <Box>{predictionData && predictionData.map(e => e.home_team)}</Box> */}
    </>
  );
};

export default Nfl;
