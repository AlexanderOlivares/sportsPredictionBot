import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";

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
    body: "Prediction Bot is an automated tool that scrapes predicted sports scores from the web and makes picks based on the Vegas betting line",
    path: "/about",
    buttonText: "Learn More",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot is now live! New predictions added daily at 11:00am CT",
    path: "/nba",
    buttonText: "View NBA Predctions",
  },
  {
    Icon: SportsFootballOutlinedIcon,
    headline: "NFL Predictions",
    body: "NFL Bot went 56-33 straight up from week 14 through the end of the postseason",
    path: "/nfl",
    buttonText: "View NFL Predctions",
  },
  {
    Icon: SportsBaseballOutlinedIcon,
    headline: "MLB Predictions",
    body: "MLB bot will debut at the start of the 2022 baseball season",
    path: "/nba",
    buttonText: "",
  },
];
