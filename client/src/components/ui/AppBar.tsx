import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "./Drawer";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

export default function ButtonAppBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar>
        <Drawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Prediction B<SmartToyOutlinedIcon />t
        </Typography>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
