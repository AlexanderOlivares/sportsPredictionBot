import React from "react";
import Typography from "@mui/material/Typography";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";

const FourOhFour = () => {
  return (
    <>
      <EventBusyOutlinedIcon sx={{ fontSize: 300 }} />
      <Typography>No predictions found for this date </Typography>
    </>
  );
};
export default FourOhFour;
