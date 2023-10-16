import { Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Stack
        sx={{
          position: "fixed",
          top: "0",
          right: "0",
          left: "200px",
          backgroundColor: "#4080f7",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Typography
          color="white"
          variant="h6"
          sx={{ paddingLeft: "40px", fontSize: "20px", fontWeight: "600" }}
        >
          Dashboard
        </Typography>
      </Stack>
    </div>
  );
};

export default Header;
