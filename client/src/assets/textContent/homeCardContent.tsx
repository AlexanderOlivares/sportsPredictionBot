import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";

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
    headline: "NFL Bot Returns",
    body: "NFL Bot is back for another season of picking winners! NFL Bot went 56-33 straight up from it's inception in week 14 through Super Bowl LVI. New weekly picks drop every Thursday.",
    path: "/nfl",
    buttonText: "View NFL Predctions",
  },
  {
    Icon: SportsFootballOutlinedIcon,
    headline: "Can you beat NFL Bot?",
    body: "Go head-to-head against NFL Bot in our ESPN Pigskin Pick'em group. Join today and see how you stack up.",
    path: "https://fantasy.espn.com/games/nfl-pigskin-pickem-2022/group?id=a3e6ef0a-ae34-49b7-9064-2ca336bd3fbb&joining=true",
    buttonText: "Join Pick'em Group",
  },
  {
    Icon: SportsOutlinedIcon,
    headline: "Timeout. How does it work?",
    body: "Prediction Bot is an automated tool that scrapes predicted NFL and NBA scores from the web and makes picks based on the Vegas betting line.",
    path: "/about",
    buttonText: "Learn More",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot will return for the 2022-2023 NBA Season for another scucessful year of predictions.",
    path: "/nba",
    buttonText: "View NBA Predctions",
  },
];
