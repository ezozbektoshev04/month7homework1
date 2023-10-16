import { AccountBox, People } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React, { Profiler } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "200px",
          background: "#fff",
          height: "100vh",
        }}
      >
        <Button
          startIcon={<People />}
          sx={{
            paddingTop: "8px",
            paddingBottom: "8px",
            marginTop: "60px",
            color: "#5b5a5a",
            fontWeight: "600",
            fontSize: "16px",
          }}
          onClick={() => navigate("/teachers")}
        >
          Teachers
        </Button>
        <Button
          startIcon={<AccountBox />}
          sx={{
            paddingTop: "8px",
            paddingBottom: "8px",
            marginTop: "8px",
            color: "#5b5a5a",
            fontWeight: "600",
            marginLeft: "-20px",
            fontSize: "16px",
          }}
          onClick={() => navigate("/")}
        >
          Profile
        </Button>
        <Button
          startIcon={<People />}
          sx={{
            paddingTop: "8px",
            paddingBottom: "8px",
            marginTop: "8px",
            color: "#5b5a5a",
            fontWeight: "600",
            fontSize: "16px",
          }}
          onClick={() => navigate("/students")}
        >
          Students
        </Button>
      </Stack>
    </div>
  );
};

export default Sidebar;
