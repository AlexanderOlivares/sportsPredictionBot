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
import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SportsHockeyOutlinedIcon from "@mui/icons-material/SportsHockeyOutlined";
import { SvgIconProps } from "@mui/material";
import UseMediaQuery from "../helpers/UseMediaQuery";

const sports: {
  sport: string;
  icon: (props: SvgIconProps) => JSX.Element;
  text: string;
}[] = [
  {
    sport: "NFL",
    icon: SportsFootballOutlinedIcon,
    text: "",
  },
  {
    sport: "NBA",
    icon: SportsBasketballOutlinedIcon,
    text: "Coming Soon",
  },
  {
    sport: "NHL",
    icon: SportsHockeyOutlinedIcon,
    text: "Coming Soon",
  },
];

const drawerDirection = (mobileViewport: boolean) => {
  return mobileViewport ? "top" : "left";
};

type Anchor = "top" | "left";

const Drawer: React.FC = () => {
  const [anchor, setAnchor] = useState<Anchor>("top");

  const isMobile = UseMediaQuery("(max-width:600px)");

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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home"].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>{<HomeOutlinedIcon />}</ListItemIcon>
            <Link to={"/"}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {sports.map(sport => (
          <ListItem button key={sport.sport}>
            <ListItemIcon>
              <sport.icon />
            </ListItemIcon>
            <Link to={`${sport.sport.toLowerCase()}`}>
              <ListItemText primary={`${sport.sport} ${sport.text && sport.text}`} />
            </Link>
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
