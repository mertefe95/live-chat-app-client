import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />

      <Route path="/" exact component />

      <Footer />



    </Router>
  
    </div>
  );
}

export default App;
