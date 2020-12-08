import './App.css';
import React from "react";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Join from "./components/Join";
import Chat from "./components/Chat";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/register" exact component={Register} />
        <Route exact path="/join" exact component={Join} />
        <Route exact path="/chat" exact component={Chat} />
      </Switch>
      <Footer />



    </Router>
  
    </div>
  );
}

export default App;
