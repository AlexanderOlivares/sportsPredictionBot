import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogContent } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

interface IPopUpDialogProps {
  title: string;
  message: string;
  openPopUpDialog: boolean;
  closePopUpDialog: () => void;
}

const PopUpDialog: React.FC<IPopUpDialogProps> = ({
  title,
  message,
  openPopUpDialog,
  closePopUpDialog,
}) => {
  return (
    <>
      <Dialog open={openPopUpDialog} onClose={closePopUpDialog}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent id="alert-dialog-title">{message}</DialogContent>
        <DialogActions>
          <Button onClick={closePopUpDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUpDialog;
