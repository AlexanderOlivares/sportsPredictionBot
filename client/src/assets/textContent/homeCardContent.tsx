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
    Icon: SportsFootballOutlinedIcon,
    headline: "Are you ready for some football?",
    body: "NFL Bot is back for another season of picking winners. Fresh weekly picks coming every Thursday.",
    path: "/nfl",
    buttonText: "View NFL Predctions",
  },
  {
    Icon: SportsOutlinedIcon,
    headline: "This is your season",
    body: "NFL Bot is here to help you win your pigskin pick'em league! NFL Bot went 56-33 straight up from it's inception in week 14 through Super Bowl LVI.",
    path: "",
    buttonText: "",
  },
  {
    Icon: SportsBasketballOutlinedIcon,
    headline: "NBA Predictions",
    body: "NBA Bot will return for the 2022-2023 NBA Season for another scucessful year of predictions.",
    path: "/nba",
    buttonText: "View NBA Predctions",
  },
];
