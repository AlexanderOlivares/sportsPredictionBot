import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import GlobalStyles from "../GlobalStyles";
import { IFilterOptions } from "../helpers/UseFilters";

interface IFilterModalProps {
  openFilterModal: boolean;
  toggleModal: () => void;
  filters: IFilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<IFilterOptions>>;
}

const FilterModal: React.FC<IFilterModalProps> = ({
  openFilterModal,
  toggleModal,
  filters,
  setFilters,
}) => {
  const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked }: { name: string; checked: boolean } = event.target;
    setFilters(prev => ({ ...prev, [name]: checked }));
    toggleModal();
  };
  return (
    <>
      <Box>
        <Modal
          open={openFilterModal}
          onClose={toggleModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={GlobalStyles.nflModal}>
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              Filter By
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FormControl>
                <Box m={2}>
                  <FormGroup row={true}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={filters.favorite}
                          onChange={handleCheckboxes}
                          color="secondary"
                          name="favorite"
                        />
                      }
                      label="Favorite"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={filters.underdog}
                          onChange={handleCheckboxes}
                          color="secondary"
                          name="underdog"
                        />
                      }
                      label="Underdog"
                      labelPlacement="top"
                    />
                  </FormGroup>
                </Box>
              </FormControl>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};
export default FilterModal;
