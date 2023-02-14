import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
// import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";

export interface IContentCardData {
  Icon: (props: SvgIconProps) => JSX.Element;
  headline: string;
  body: string;
  path: string;
  buttonText: string;
}

export const HomeCardData: IContentCardData[] = [
  {
    Icon: SmartToyOutlinedIcon,
    headline: "Timeout. How does it work?",
    body: "Prediction Bot is an automated tool that scrapes predicted NFL and NBA scores from the web and makes picks based on the Vegas betting line.",
    path: "/about",
    buttonText: "Learn More",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot is on a heater! New picks drop daily at 11:00am CST",
    path: "/nba",
    buttonText: "View NBA Predictions",
  },
  {
    Icon: SportsFootballOutlinedIcon,
    headline: "NFL Predictions",
    body: "NFL Bot had an amazing 10-3 run in the 2022 playoffs! More NFL picks coming your way in August.",
    path: "/nfl",
    buttonText: "View NFL Predictions",
  },
];
