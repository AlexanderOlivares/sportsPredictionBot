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
    Icon: SportsFootballOutlinedIcon,
    headline: "NFL Predictions",
    body: "Bengals or Rams? Checkout PB's Super Bowl prediction",
    path: "/nfl",
    buttonText: "View NFL Predctions",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot is now live!",
    path: "/nba",
    buttonText: "View NBA Predctions",
  },
  {
    Icon: SportsBaseballOutlinedIcon,
    headline: "MLB Predictions",
    body: "MLB bot will debut at the start of the 2022 baseball season",
    path: "/nba",
    buttonText: "",
  },
];
