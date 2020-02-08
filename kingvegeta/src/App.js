import React from 'react';
import CardContainer from './components/CardContainer';
import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png" className="App-logo" alt="Spinning Rick Sanchez head" />
        <h2>
         "Wubba Lubba Dub Dub!" -Rick Sanchez
        </h2>
      </header>
      
        
      
      <CardContainer />
    </div>
  );
}

export default App;
