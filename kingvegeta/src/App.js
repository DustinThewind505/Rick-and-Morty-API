import React from 'react';
import CardContainer from './components/CardContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://dbz.space/asset/global/character/card/2000120/card_2000120_character.png" className="App-logo" alt="King Vegeta" />
        <p>
         King Vegeta
        </p>
      </header>
      <CardContainer />
    </div>
  );
}

export default App;
