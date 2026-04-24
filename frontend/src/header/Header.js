import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky" }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: "black" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
