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
import { useState, useEffect } from "react";
import StickyFooter from "./components/Footer";
import Rewards from "./components/Rewards";
// import UserPage from "./components/UserPage";
import UserPage from "./components/UserPage";
import icon from "./Images/favicon.ico";

export default function App() {
  const BACKENDURL = "";

  // current user state keeps track of the user that is currently logged in
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", icon);
  }, []);

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
      .get(`${BACKENDURL}/users`)
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
              <Button variant="text">
                <Link to="/rewards">Rewards </Link>
              </Button>
            </Stack>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutTeam />} />
            <Route path="/rewards" element={<Rewards />} />
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

// FOR YOUR COPY AND PASTE REFERENCE, HERE ARE THE IMAGE URLS FOR THE BADGES:
//   <img class= "badges" src="/Assets/Images/Badges/balloon.png" alt="balloon"></img>
//         <img class= "badges" src="/Assets/Images/Badges/dating-app.png" alt="speech bubbles with hearts"></img>
//         <img class= "badges" src="/Assets/Images/Badges/direction.png" alt="direction signs"></img>
//         <img class= "badges" src="/Assets/Images/Badges/eye.png" alt="eye"></img>
//         <img class= "badges" src="/Assets/Images/Badges/fist-bump.png" alt="fist-bump"></img>
//         <img class= "badges" src="/Assets/Images/Badges/five.png" alt="number five"></img>
//         <img class= "badges" src="/Assets/Images/Badges/hello.png" alt="hello"></img>
//         <img class= "badges" src="/Assets/Images/Badges/in-love.png" alt="smiley with heart eyes"></img>
//         <img class= "badges" src="/Assets/Images/Badges/old-man.png" alt="old man"></img>
//         <img class= "badges" src="/Assets/Images/Badges/question.jpg" alt="question mark"></img>
//         <img class= "badges" src="/Assets/Images/Badges/quoteBubbles.jpg" alt="quote bubbles"></img>
//         <img class= "badges" src="/Assets/Images/Badges/speech.png" alt="person giving speech"></img>
//         <img class= "badges" src="/Assets/Images/Badges/spoon-and-fork.png" alt="spoon and fork"></img>
//         <img class= "badges" src="/Assets/Images/Badges/thumbs-down.png" alt="thumbs down"></img>
//         <img class= "badges" src="/Assets/Images/Badges/smiley1.jpg" alt="smiley face"></img>
//         <img class= "badges" src="/Assets/Images/Badges/romantic-date.png" alt="people in love"></img>
