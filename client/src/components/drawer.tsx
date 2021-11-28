import * as React from "react";
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
import { SvgIconProps } from "@mui/material";

const sports: {
  sport: string;
  icon: (props: SvgIconProps) => JSX.Element;
  text: string;
}[] = [
  {
    sport: "NFL",
    icon: SportsFootballIcon,
    text: "Coming Soon",
  },
  {
    sport: "NBA",
    icon: SportsBasketballIcon,
    text: "Coming Soon",
  },
];

type Anchor = "top" | "left";

export default function SwipeableTemporaryDrawer() {
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
        {["Home"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* {["NFL", "NBA", "NHL"].map((text, index) => ( */}
        {sports.map(sport => (
          <ListItem button key={sport.sport}>
            <ListItemIcon>
              <sport.icon />
            </ListItemIcon>
            <ListItemText primary={sport.sport} />
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
}
