import "./App.css";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SHYBYE!</h1>
      </header>
      <body>
        <p>
          This is the start of <i>SHYBYE!</i>, an app hacked during GDI
          Hackathon '22! ✨
        </p>
        <UserPage></UserPage>
      </body>
      <footer>&copy; 2022</footer>
    </div>
  );
}

export default App;
