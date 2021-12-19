import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import HomeIcon from "@mui/icons-material/Home";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
// import { Drawer, SvgIconProps } from "@mui/material";
import { SvgIconProps } from "@mui/material";

const sports: {
  sport: string;
  icon: (props: SvgIconProps) => JSX.Element;
  text: string;
}[] = [
  {
    sport: "NFL",
    icon: SportsFootballIcon,
    text: "",
  },
  {
    sport: "NBA",
    icon: SportsBasketballIcon,
    text: "Coming Soon",
  },
  {
    sport: "NHL",
    icon: SportsHockeyIcon,
    text: "Coming Soon",
  },
];

type Anchor = "top" | "left";

const Drawer: React.FC = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
  });

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
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
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
              <ListItemText
                primary={`${sport.sport} ${sport.text && sport.text}`}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left", "top"] as const).map(anchor => (
        <React.Fragment key={anchor}>
          <Box m={3} position="static" style={{ float: "left" }}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {<MenuIcon fontSize="large" />}
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </Box>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Drawer;
