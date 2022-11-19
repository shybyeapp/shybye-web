import "./App.css";
import React from "react";
// import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import AboutTeam from "./components/AboutTeam";
import Home from "./components/Home";
import ResearchPage from "./components/ResearchPage";
import { useState, useEffect } from "react";
import StickyFooter from "./components/Footer";

import icon from "./Images/favicon.ico";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import UserPage from "./components/UserPage";
import RewardAchievement from "./components/RewardAchievement";

export default function App() {
  // const BACKENDURL = "https://shy-bye-app.fly.dev";

  // current user state keeps track of the user that is currently logged in
  // const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", icon);
  }, []);

  // async call to db: GET user
  // const getReturningUser = (userInfo) => {
  //   console.log("getting user");
  //   axios
  //     .get(`${BACKENDURL}/users`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const theme = createTheme({
    palette: {
      background: {
        default: "#FBFBEE",
      },
      primary: {
        main: "#468189",
      },
      secondary: {
        main: "#F4E9CD",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <section className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutTeam />} />
            <Route path="/dashboard" element={<UserPage />} />
            <Route path="/reward" element={<RewardAchievement />} />
          </Routes>
        </Router>

        <StickyFooter />
      </section>
    </ThemeProvider>
  );
}
