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
      <header className="App-header" style={background ? { background: "#282c34" } : { background: 'url("https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-001.jpg")' }} onClick={bgColor}>

        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a46868a6-3de3-4c82-b291-dcc524c1a7a7/d9mxrw7-a76a3243-56ed-4314-8dcd-ded2078dc26b.png/v1/fill/w_831,h_962,q_75,strp/rick_face_by_kushmastafresh-d9mxrw7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hNDY4NjhhNi0zZGUzLTRjODItYjI5MS1kY2M1MjRjMWE3YTcvZDlteHJ3Ny1hNzZhMzI0My01NmVkLTQzMTQtOGRjZC1kZWQyMDc4ZGMyNmIucG5nIiwid2lkdGgiOiI8PTgzMSIsImhlaWdodCI6Ijw9OTYyIn1dXX0.SjC7iCqi43Ux7hEArOv0VnaWwVWdJpvOricTa6Mms0Q" className="App-logo" alt="Spinning Rick Sanchez head" onMouseOver={(event) => event.target.src = "https://media.dayoftheshirt.com/images/shirts/TCyaG/popvulture_evil-morty-pin_1514855690.full.png"} onMouseLeave={(event) => event.target.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a46868a6-3de3-4c82-b291-dcc524c1a7a7/d9mxrw7-a76a3243-56ed-4314-8dcd-ded2078dc26b.png/v1/fill/w_831,h_962,q_75,strp/rick_face_by_kushmastafresh-d9mxrw7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hNDY4NjhhNi0zZGUzLTRjODItYjI5MS1kY2M1MjRjMWE3YTcvZDlteHJ3Ny1hNzZhMzI0My01NmVkLTQzMTQtOGRjZC1kZWQyMDc4ZGMyNmIucG5nIiwid2lkdGgiOiI8PTgzMSIsImhlaWdodCI6Ijw9OTYyIn1dXX0.SjC7iCqi43Ux7hEArOv0VnaWwVWdJpvOricTa6Mms0Q"} />

        <h1 onMouseOver={(event) => event.target.style.color = "yellow"} onMouseLeave={(event) => event.target.style.color = "white"}>
          "Wubba Lubba Dub Dub!" -Rick Sanchez
        </h1>

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
