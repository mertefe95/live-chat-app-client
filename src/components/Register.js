import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/UserContext";
import ErrorNotice from "./misc/ErrorNotice";
import GoogleLogin from 'react-google-login';

const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [verifyMessage, setVerifyMessage] = useState({
        text: undefined
    });
    

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try {
        const newUser = { username, email, password };
        await Axios.post(
            "http://localhost:8080/api/register", 
            newUser
        );

        await setVerifyMessage({
            text: "Please verify your email to proceed login."
        })
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }

    }
    const responseGoogle = (response) => {
    console.log(response);
    }


return (
<div className="page">
    <h2>Register</h2>

    <h3>{verifyMessage.text}</h3>

    <h4>{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />} </h4>

    <form className="form" onSubmit={submit}>
        <label htmlFor="register-username">Username</label>
        <input id="register-username" type="username" onChange={e => setUsername(e.target.value)} />

        <label htmlFor="register-email">Email</label>
        <input id="register-email" type="email" onChange={e => setEmail(e.target.value)} />

        <label htmlFor="reigster-password">Password</label>
        <input id="register-password" type="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
    </form>

    <p>Or</p>
    <h2>Login with Google Account</h2>

    <GoogleLogin
    clientId="310321453603-jj2qtlkeer5o2u30tdnf216knss728ia.apps.googleusercontent.com"
    buttonText=<p className="google-p">Login with Google</p>
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
);


    <p>Or</p>
    <h2>Login with Facebook Account</h2>
</div>

)
}

export default Register;
