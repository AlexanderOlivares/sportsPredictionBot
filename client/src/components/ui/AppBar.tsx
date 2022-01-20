import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "./Drawer";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import HideOnScroll from "./HideOnScroll";
import { PaletteMode } from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Box from "@mui/material/Box";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

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
          <Box>
            <IconButton onClick={toggleDarkMode}>
              {darkMode === "dark" ? (
                <ToggleOnIcon />
              ) : (
                <ToggleOffOutlinedIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={toggleDarkMode}>
              {darkMode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default ButtonAppBar;
