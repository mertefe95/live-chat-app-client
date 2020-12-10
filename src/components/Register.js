import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/UserContext";

const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [verifyMessage, setVerifyMessage] = useState({
        text: undefined
    });

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        await Axios.post(
            "http://localhost:8080/api/register", 
            newUser
        );

        await setVerifyMessage({
            text: "Please verify your email to proceed login."
        })

    }


return (
<div className="page">
    <h2>Register</h2>

    <h3>{verifyMessage.text}</h3>

    <form className="form" onSubmit={submit}>
        <label htmlFor="register-username">Username</label>
        <input id="register-username" type="username" onChange={e => setUsername(e.target.value)} />

        <label htmlFor="register-email">Email</label>
        <input id="register-email" type="email" onChange={e => setEmail(e.target.value)} />

        <label htmlFor="reigster-password">Password</label>
        <input id="register-password" type="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
    </form>
</div>

)
}

export default Register;
