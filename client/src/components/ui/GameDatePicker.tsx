import React, { useEffect } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

interface INbaGameDateProps {
  setGameDate: React.Dispatch<React.SetStateAction<string>>;
}

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

let showGamesForDate = today;
if (today.getHours() < 11) {
  showGamesForDate = yesterday;
}

const GameDatePicker: React.FC<INbaGameDateProps> = ({ setGameDate }) => {
  const [date, setDate] = React.useState<Date | null>(showGamesForDate);

  const formatDate = (date: Date | null): void => {
    if (date) {
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.getDate();
      const year = date.getFullYear();
      setGameDate(`${month} ${day} ${year}`);
    }
  };

  useEffect(() => {
    formatDate(date);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Select Game Date"
        value={date}
        onChange={newValue => {
          setDate(newValue);
          formatDate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};
export default GameDatePicker;
