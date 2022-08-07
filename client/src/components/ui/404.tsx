import React from "react";
import Typography from "@mui/material/Typography";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";

export interface IFourOhFour {
  dateOrWeek: String;
}

const FourOhFour: React.FC<IFourOhFour> = ({ dateOrWeek }) => {
  return (
    <>
      <EventBusyOutlinedIcon sx={{ fontSize: 300 }} />
      <Typography>{`No predictions found for ${
        dateOrWeek == "date" ? "this date" : dateOrWeek
      }`}</Typography>
    </>
  );
};
export default FourOhFour;
