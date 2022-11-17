import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutTeam from "./components/AboutTeam";
import ResearchPage from "./components/ResearchPage";
// import { useState } from "react";
// import UserPage from "./components/UserPage";

export default function App() {
  // const navigate = useNavigate();

  // current user state keeps track of the user that is currently logged in
  // const [currentUser, setCurrentUser] = useState([]);

  return (
    <section className="App">
      <header className="App-header">
        <h1 className="App-title">SHYBYE!</h1>
      </header>
      <Router>
        <div>
          <nav>
            <Link to="/">Home </Link> |<Link to="/about"> About </Link>|{" "}
            <Link to="/research">Research </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutTeam />} />
          </Routes>
        </div>
      </Router>
      <footer className="App-footer">
        <p>&copy; 2022</p>
      </footer>
    </section>
  );
}

function Home() {
  return (
    <section>
      <p>
        This is the start of <i>SHYBYE!</i>, an app hacked during GDI Hackathon
        '22! ✨
      </p>
      <p>we need a login component here</p>
      <p>
        upon login, navigate to user page component where they can see their
        saved challenges and badges
      </p>
    </section>
  );
}
