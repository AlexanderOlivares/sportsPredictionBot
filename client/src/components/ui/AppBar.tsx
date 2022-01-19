import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "./Drawer";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import HideOnScroll from "./HideOnScroll";
import { PaletteMode } from "@mui/material";
import Button from "@mui/material/Button";

interface DarkModeProps {
  darkMode: PaletteMode;
  setDarkMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

const ButtonAppBar: React.FC<DarkModeProps> = ({
  darkMode,
  setDarkMode,
}: DarkModeProps) => {
  const toggleDarkMode = () => {
    const mode = darkMode === "dark" ? "light" : "dark";
    setDarkMode(mode);
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Toolbar>
          <Drawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prediction B<SmartToyOutlinedIcon sx={{ verticalAlign: "sub" }} />T
          </Typography>
          <Button variant="contained" onClick={toggleDarkMode}>
            Dark
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default ButtonAppBar;
