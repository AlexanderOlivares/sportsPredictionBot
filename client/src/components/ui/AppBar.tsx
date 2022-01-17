import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "./Drawer";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import HideOnScroll from "./HideOnScroll";

export default function ButtonAppBar() {
  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Toolbar>
          <Drawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prediction B<SmartToyOutlinedIcon sx={{ verticalAlign: "sub" }} />T
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
