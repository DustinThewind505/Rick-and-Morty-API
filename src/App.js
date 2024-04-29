import React, { useState } from 'react';
import { Route } from "react-router-dom";

import AppHeader from './components/app-header';
import Home from './pages/home';
import Episodes from './pages/episodes'
import CardContainer from './pages/characters';
import Footer from './components/footer'
import './App.css';

function App() {
  const [appPage, setAppPage] = useState("home");

  console.log("Render TEST")
  

  return (
    <div className="App">
      <AppHeader appPage={appPage} setAppPage={setAppPage} />
      <Route exact path="/" component={Home} />
      <Route path="/episodes" component={Episodes} />
      <Route path="/characters" component={CardContainer} />
      <Footer />
    </div>
  );
}

export default App;
