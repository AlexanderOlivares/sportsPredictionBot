import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function ScrollToTop() {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <div>
      <IconButton aria-label="scroll to top" onClick={scrollToTop}>
        <ArrowCircleUpIcon />
      </IconButton>
    </div>
  );
}
