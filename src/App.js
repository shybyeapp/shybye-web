import "./App.css";

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
        
      </body>
      <footer>&copy; 2022 team shygirls &hearts;</footer>
    </div>

    
  );
}

export default App;

{
  
  
      }

      export const _App = ({ pageProps, Component }) => {

        return (
          <>
            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: josefin sans;
              }
      
              body {
                background-color: #fff;
              }
      
              a {
                color: inherit;
                text-decoration: none;
              }
      
              * {
                box-sizing: border-box;
              }
      
              header {
                height: 100px;
                position: sticky;
                top: 0;
                margin-top: 32px;
                background-color: #fff
              }
      
              nav {
                max-width: 760px;
                padding: 32px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin: 0 auto;
              }
      
              button {
                border: 0;
                border-radius: 4px;
                height: 40px;
                min-width: 40px;
                padding: 0 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #e2e8f0;
                cursor: pointer;
                color: #fff;
                margin-left: 16px;
              }
      
              button:hover, button:focus, button:active {
                background-color: var(--button-bg-hover);
                outline: none;
              }
            `}</style>
            <header>
              <nav>
                <button>Toggle</button>
              </nav>
            </header>
            <Component {...pageProps} />
          </>
        );
      };
      
     

      /* FOR YOUR COPY AND PASTE REFERENCE, HERE ARE THE IMAGE URLS FOR THE BADGES: 
  
  <img class= "badges" src="/Assets/Images/Badges/balloon.png" alt="balloon"></img>
        <img class= "badges" src="/Assets/Images/Badges/dating-app.png" alt="speech bubbles with hearts"></img>
        <img class= "badges" src="/Assets/Images/Badges/direction.png" alt="direction signs"></img>
        <img class= "badges" src="/Assets/Images/Badges/eye.png" alt="eye"></img>
        <img class= "badges" src="/Assets/Images/Badges/fist-bump.png" alt="fist-bump"></img>
        <img class= "badges" src="/Assets/Images/Badges/five.png" alt="number five"></img>
        <img class= "badges" src="/Assets/Images/Badges/hello.png" alt="hello"></img>
        <img class= "badges" src="/Assets/Images/Badges/in-love.png" alt="smiley with heart eyes"></img>
        <img class= "badges" src="/Assets/Images/Badges/old-man.png" alt="old man"></img>
        <img class= "badges" src="/Assets/Images/Badges/question.jpg" alt="question mark"></img>
        <img class= "badges" src="/Assets/Images/Badges/quoteBubbles.jpg" alt="quote bubbles"></img>
        <img class= "badges" src="/Assets/Images/Badges/speech.png" alt="person giving speech"></img>
        <img class= "badges" src="/Assets/Images/Badges/spoon-and-fork.png" alt="spoon and fork"></img>
        <img class= "badges" src="/Assets/Images/Badges/thumbs-down.png" alt="thumbs down"></img>
        <img class= "badges" src="/Assets/Images/Badges/smiley1.jpg" alt="smiley face"></img>
        <img class= "badges" src="/Assets/Images/Badges/romantic-date.png" alt="people in love"></img> */