import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import AboutTeam from "./components/AboutTeam";
import Home from "./components/Home";
import ResearchPage from "./components/ResearchPage";
import { useState } from "react";
import StickyFooter from "./components/Footer";
// import UserPage from "./components/UserPage";

export default function App() {
  const BACKENDURL = "";

  // current user state keeps track of the user that is currently logged in
  const [currentUser, setCurrentUser] = useState([]);

  // async call to db: POST user
  const addNewUser = (userInfo) => {
    console.log("adding user");
    axios
      .post(`${BACKENDURL}/users`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // async call to db: GET user
  const getReturningUser = (userInfo) => {
    console.log("adding user");
    axios
      .post(`${BACKENDURL}/users`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // async call to db: GET user's challenges

  // async call to db: GET user's score

  return (
    <section className="App">
      <Header></Header>

      <Router>
        <div className="navbar">
          <nav>
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="text">
                <Link to="/">Home </Link>
              </Button>
              <Button variant="text">
                <Link to="/about"> About </Link>
              </Button>
              <Button variant="text">
                <Link to="/research">Research </Link>
              </Button>
            </Stack>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutTeam />} />
          </Routes>
        </div>
      </Router>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}></Grid>
      </Grid>
      <StickyFooter />
    </section>
  );
}
