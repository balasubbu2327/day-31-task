import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import React from "react";

import { useNavigate } from "react-router-dom";

import AddMark from "./AddMark";

const Header = ({ mode, setMode }) => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/add")} color="inherit">
            Add Student
          </Button>
          <Button
            style={{ marginLeft: "auto" }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            color="inherit"
          >
            {mode === "light" ? "dark" : "light"} Theme
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;