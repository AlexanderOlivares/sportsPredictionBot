import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { removeUnderscores } from "../pages/Nfl";

interface ISelectFormProps {
  label: string;
  value: string;
  timeRange: string[];
  handleSelectChange: (event: SelectChangeEvent) => void;
}

const SelectForm: React.FC<ISelectFormProps> = ({
  label,
  value,
  timeRange,
  handleSelectChange,
}) => {
  return (
    <>
      <Box className="form-select">
        <FormControl fullWidth>
          <InputLabel id="select-nfl-week">{label}</InputLabel>
          <Select
            value={value}
            label={label}
            name={label}
            onChange={handleSelectChange}
            MenuProps={{ sx: { maxHeight: 500 } }}
          >
            {timeRange.map(option => {
              return (
                <MenuItem key={option} value={option}>
                  {removeUnderscores(option)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
export default SelectForm;
