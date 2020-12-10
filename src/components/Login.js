import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/UserContext";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [verifyMessage, setVerifyMessage] = useState({
        text: undefined
    });

    const { setUserData } = useContext(UserContext);
    const history = useHistory();


    const submit = async (e) => {
        e.preventDefault();
        const loginUser = { email, password };
        await Axios.post(
            "http://localhost:8080/api/login", 
            loginUser
        );

        await setVerifyMessage({
            text: "Please verify your email to proceed login."
        })

    }


return (
<div className="page">
    <h2>Login</h2>

    <h3>{verifyMessage.text}</h3>

    <form className="form" onSubmit={submit}>

        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="email" onChange={e => setEmail(e.target.value)} />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit">Submit</button>

        <ul>
            <li><Link to="/forgot-password">Forgot your password?</Link></li>

        </ul>
    </form>
</div>

)
}
export default Login;
