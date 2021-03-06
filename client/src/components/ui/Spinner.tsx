import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner: React.FC = () => {
  return (
    <Box p={5}>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Spinner;
