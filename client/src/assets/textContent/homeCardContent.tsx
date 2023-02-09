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
    headline: "The NLF Bot Super Bowl pick is out now!",
    body: "NFL Bot is 10-2 SU and 7-4-1 ATS in the playoffs! Will it be the Chiefs or Eagles? View NFL predicitions to find out.",
    path: "/nfl",
    buttonText: "View NFL Predictions",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot is back at it folks! New picks drop daily at 11:00am CST",
    path: "/nba",
    buttonText: "View NBA Predictions",
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
];
