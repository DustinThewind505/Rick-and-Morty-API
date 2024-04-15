import React, { useState } from 'react';
import { Route } from "react-router-dom";

import AppHeader from './components/app-header';
import Home from './pages/home/Home';
import CardContainer from './pages/characters/index.js';
import Footer from './components/footer'
import './App.css';

function App() {
  const [appPage, setAppPage] = useState("home");

  console.log("Render TEST")
  

  return (
    <div className="App">
      <AppHeader appPage={appPage} setAppPage={setAppPage} />
      <Route exact path="/" component={Home} />
      <Route path="/characters" component={CardContainer} />
      <Footer />
    </div>
  );
}

export default App;
