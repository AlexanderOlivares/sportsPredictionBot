import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SvgIconProps } from "@mui/material";
import UseMediaQuery from "../helpers/UseMediaQuery";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import sports from "../../assets/textContent/drawerContent";

const drawerDirection = (mobileViewport: boolean) => {
  return mobileViewport ? "top" : "left";
};

type Anchor = "top" | "left";

const Drawer: React.FC = () => {
  const isMobile = UseMediaQuery("(max-width:600px)");
  const [anchor, setAnchor] = useState<Anchor>("top");
  const [state, setState] = useState({
    top: false,
    left: false,
  });

  useEffect(() => {
    setAnchor(drawerDirection(isMobile));
  }, [isMobile]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const standAloneMenuOption = (
    key: string,
    path: string,
    Icon: (props: SvgIconProps) => JSX.Element
  ) => {
    return (
      <ListItem button key={key} component={Link} to={path}>
        <ListItemIcon>{<Icon />}</ListItemIcon>
        <ListItemText primary={key} primaryTypographyProps={{ fontSize: "24px" }} />
      </ListItem>
    );
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 325 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {standAloneMenuOption("Home", "/", HomeOutlinedIcon)}
        {standAloneMenuOption("About", "/about", InfoOutlinedIcon)}
      </List>
      <Divider />
      <List>
        {sports.map(sport => (
          <ListItem
            button
            key={sport.sport}
            component={Link}
            to={`${sport.sport.toLowerCase()}`}
          >
            <ListItemIcon>
              <sport.icon />
            </ListItemIcon>
            <ListItemText
              primary={`${sport.sport} ${sport.text && sport.text}`}
              primaryTypographyProps={{ fontSize: "24px" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button sx={{ color: "white" }} onClick={toggleDrawer(anchor, true)}>
        {<MenuOutlinedIcon fontSize="large" />}
      </Button>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </>
  );
};
export default Drawer;
