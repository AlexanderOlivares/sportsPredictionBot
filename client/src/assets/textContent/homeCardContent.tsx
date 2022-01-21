import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";

interface IHomeCardData {
  SportIcon: (props: SvgIconProps) => JSX.Element;
  headline: string;
  body: string;
  path: string;
  buttonText: string;
}

export const HomeCardData: IHomeCardData[] = [
  {
    SportIcon: SmartToyOutlinedIcon,
    headline: "Prediction Bot",
    body: "Prediction bot is an automated tool that scrapes predicted scores from the web and makes picks based on the Vegas betting line.",
    path: "https://github.com/AlexanderOlivares/nfl-prediction-bot",
    buttonText: "Learn More",
  },
  {
    SportIcon: SportsFootballOutlinedIcon,
    headline: "NFL Predictions",
    body: "Prediction bot went 4-2 ATS during NFL Wild Card Weekend",
    path: "/nfl",
    buttonText: "View NFL Predctions",
  },
  {
    SportIcon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA bot is currently in development",
    path: "/nba",
    buttonText: "",
  },
  {
    SportIcon: SportsBaseballOutlinedIcon,
    headline: "MLB Predictions",
    body: "MLB bot will debut at the start of the 2022 baseball season",
    path: "/nba",
    buttonText: "",
  },
];
