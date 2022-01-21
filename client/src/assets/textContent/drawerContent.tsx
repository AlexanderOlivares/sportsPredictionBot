import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";

const sports: {
  sport: string;
  icon: (props: SvgIconProps) => JSX.Element;
  text: string;
}[] = [
  {
    sport: "NFL",
    icon: SportsFootballOutlinedIcon,
    text: "",
  },
  {
    sport: "NBA",
    icon: SportsBasketballOutlinedIcon,
    text: "(Coming Soon)",
  },
  {
    sport: "MLB",
    icon: SportsBaseballOutlinedIcon,
    text: "(Coming Soon)",
  },
];

export default sports;
