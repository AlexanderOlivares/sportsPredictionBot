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
    Icon: SportsFootballOutlinedIcon,
    headline: "NFL Predictions",
    body: "Get ready for the new season with fresh NFL picks dropping every Thursday at 6 PM Central! After an impressive 10-3 run during the playoffs, NFL Bot is back to help you elevate your strategy and gain the winning edge.",
    path: "/nfl",
    buttonText: "View NFL Predictions",
  },
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
    body: "NBA Bot will be return for the new season in October",
    path: "/nba",
    buttonText: "View NBA Predictions",
  },
];
