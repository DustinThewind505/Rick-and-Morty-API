import React, { useState } from 'react';
import { Route, NavLink } from "react-router-dom";

import Home from './components/Home';
import CardContainer from './components/CardContainer';
import './App.css';

function App() {
  const [background, setBackground] = useState(false);

  function bgColor() {
    setBackground(!background);
  }

  return (
    <div className="App">
      <header className="App-header" style={background ? { background: 'url("https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-001.jpg")' } : { background: "#282c34" }} onClick={bgColor}>

        <img src="https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png" className="App-logo" alt="Spinning Rick Sanchez head" onMouseOver={(event) => event.target.src = "https://media.dayoftheshirt.com/images/shirts/TCyaG/popvulture_evil-morty-pin_1514855690.full.png"} onMouseLeave={(event) => event.target.src = "https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png"} />

        <h2 onMouseOver={(event) => event.target.style.color = "yellow"} onMouseLeave={(event) => event.target.style.color = "white"}>
          "Wubba Lubba Dub Dub!" -Rick Sanchez
        </h2>

      </header>
      <div className="navbar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/characters" component={CardContainer} />
    </div>
  );
}

export default App;
