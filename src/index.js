import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  
);
export default function Index() {
  return <>
    <style jsx>{`
      .wrapper {
        max-width: 760px;
        padding: 0 32px;
        margin: 0 auto;
      }
    `}</style>
    <main className="page">
      <div className="wrapper">
        <h1 className="intro">Hello World!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          animi consectetur delectus dolore eligendi id illo impedit iusto,
          laudantium nam nisi nulla quas, qui quisquam voluptatum? Illo nostrum
          odit optio.
        </p>
      </div>

    </main>
  </>;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
