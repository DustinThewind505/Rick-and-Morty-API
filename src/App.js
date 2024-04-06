import React, { useState } from 'react';
import { Route, NavLink } from "react-router-dom";

import Home from './components/Home';
import CardContainer from './components/CardContainer';
import Footer from './components/footer'
import './App.css';

function App() {
  const [background, setBackground] = useState(false);

  function bgColor() {
    setBackground(!background);
  }

  return (
    <div className="App">
      <header className="App-header" style={background ? { background: 'url("images/rick-and-morty-wallpaper2.jpg")', backgroundPosition: "50% 50%", backgroundSize: "cover" } : { background: 'url("images/rick-and-morty-wallpaper.jpg")' }} onClick={bgColor}>

        <img src="images/rick-sanchez-head.png" className="App-logo" alt="Spinning Rick Sanchez head" onMouseOver={(event) => event.target.src = "images/jerrySmithHead.png"} onMouseLeave={(event) => event.target.src = "images/rick-sanchez-head.png"} />

        {
          !background ? <h1 onMouseOver={(event) => event.target.style.color = "yellow"} onMouseLeave={(event) => event.target.style.color = "white"}>
          "Wubba Lubba Dub Dub!" -Rick Sanchez
        </h1> : null
        }

      </header>
      <div className="navbar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/characters" component={CardContainer} />
      <Footer />
    </div>
  );
}

export default App;
