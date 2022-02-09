import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

interface INbaGameDateProps {
  setGameDate: React.Dispatch<React.SetStateAction<string>>;
}

const GameDatePicker: React.FC<INbaGameDateProps> = ({ setGameDate }) => {
  const [date, setDate] = React.useState<Date | null>(new Date());

  const formatDate = (date: Date | null): void => {
    if (date) {
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.getDate();
      const year = date.getFullYear();
      setGameDate(`${month} ${day} ${year}`);
    }
  };

  useEffect(() => {
    formatDate(new Date());
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select Game Date"
        value={date}
        onChange={newValue => {
          setDate(newValue);
          formatDate(newValue);
        }}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
export default GameDatePicker;
