import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";
// import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";

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
    headline: "Prediction Bot",
    body: "Prediction Bot is an automated tool that scrapes predicted NFL and NBA scores from the web and makes picks based on the Vegas betting line.",
    path: "/about",
    buttonText: "Learn More",
  },
  {
    Icon: SportsOutlinedIcon,
    headline: "Are you ready for some football?",
    body: "The NBA season is over and it's officially the off-season for NBA Bot. NFL Bot will be back with weekly predictions starting week 1 of the 2022-2023 NFL Season.",
    path: "",
    buttonText: "",
  },
  {
    Icon: SportsFootballOutlinedIcon,
    headline: "NFL Predictions",
    body: "NFL Bot went 56-33 straight up from it's inception in week 14 through Super Bowl LVI.",
    path: "/nfl",
    buttonText: "View NFL Predctions",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot will return for the 2022-2023 NBA Season for another scucessful year of predictions.",
    path: "/nba",
    buttonText: "View NBA Predctions",
  },
];
