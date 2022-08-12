import SportsFootballOutlinedIcon from "@mui/icons-material/SportsFootballOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import { SvgIconProps } from "@mui/material";

const sports: {
  sport: string;
  icon: (props: SvgIconProps) => JSX.Element;
  text: string;
}[] = [
  {
    sport: "NFL",
    icon: SportsFootballOutlinedIcon,
    text: "Picks",
  },
  {
    sport: "NBA",
    icon: SportsBasketballOutlinedIcon,
    text: "Picks",
  },
];

export default sports;
