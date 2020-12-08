import './App.css';
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/register" exact component={Register} />

      </Switch>
      <Footer />



    </Router>
  
    </div>
  );
}

export default App;
