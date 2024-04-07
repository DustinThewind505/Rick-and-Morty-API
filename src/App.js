import React, { useState } from 'react';
import { Route } from "react-router-dom";

import AppHeader from './components/app-header';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import Footer from './components/footer'
import './App.css';

function App() {
  const [appPage, setAppPage] = useState("home");
  

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
