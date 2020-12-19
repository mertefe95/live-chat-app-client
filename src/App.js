import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Register from "./components/user-components/Register";
import ForgotPassword from "./components/user-components/ForgotPassword";
import Login from "./components/user-components/Login";
import AdminLogin from "./components/user-components/AdminLogin";
import Homepage from "./components/Homepage";
import SignupSide from "./components/SignUpSide";
import Chat from "./components/Chat";
import Join from "./components/Join";
import UserActivated from "./components/user-components/UserActivated";


import Axios from "axios";
import UserContext from "./components/context/UserContext";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const userRes = await Axios.post(
        "https://localhost:8080/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
        );

      setUserData({
        token,
        user: userRes.data
      });
    }

    checkLoggedIn();
  }, []);

  return (
    <div className="App">
    <Router>
    <UserContext.Provider value={{ userData, setUserData }}>
      <Header />
      <Switch>
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/join" exact component={Join} />
        <Route exact path="/chat" exact component={Chat} />
        <Route exact path="/register" exact component={Register} />
        <Route exact path="/forgot-password" exact component={ForgotPassword} />
        <Route exact path="/admin-login" exact component={AdminLogin} />
        <Route exact path="/" exact component={Homepage} />
        <Route exact path="/signupside" exact component={SignupSide} />
        <Route exact path="/chat" exact component={Chat} />
        <Route exact path="/join" exact component={Join} />
        <Route exact path="/user-activated/:activationKey" exact component={UserActivated} />
      </Switch>
      <Footer />
      </UserContext.Provider>
    </Router>
  
    </div>
  );
}

export default App;
