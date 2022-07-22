import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import AddMark from "./components/AddMark";
import EditMark from "./components/EditMark";
import ViewMark from "./components/ViewMark";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./style.css";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={3} style={{ minHeight: "100vh" }}>
          <Header mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddMark />} />
            <Route path="/student/edit/:id" element={<EditMark />} />
            <Route path="/student/view/:id" element={<ViewMark />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;