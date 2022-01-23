import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { IContentCardData } from "./homeCardContent";
import GitHubIcon from "@mui/icons-material/GitHub";

export const AboutCardData: IContentCardData[] = [
  {
    Icon: SmartToyOutlinedIcon,
    headline: "How does it work?",
    body: `Prediction bot scrapes computer-predicted scores from oddShark.com and dRatings.com and averages those scores for each matchup. 
    It then makes a pick by analyzing the Vegas points spread and determining if the favored team will cover the spread`,
    path: "/about",
    buttonText: "",
  },
  {
    Icon: GitHubIcon,
    headline: "View On GitHub",
    body: "For a more detailed explanation of the raw prediction data see the readme on GitHub. To run on your local machine, clone the scraper-only branch",
    path: "https://github.com/AlexanderOlivares/nfl-prediction-bot",
    buttonText: "See source code",
  },
];
