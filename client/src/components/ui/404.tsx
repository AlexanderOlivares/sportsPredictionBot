import React from "react";
import Typography from "@mui/material/Typography";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const FourOhFour = () => {
  return (
    <>
      <ReportProblemOutlinedIcon sx={{ fontSize: 300 }} />
      <Typography>
        Flag on the play! There was an error loading this page.
      </Typography>
    </>
  );
};
export default FourOhFour;
