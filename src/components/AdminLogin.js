import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/UserContext";


const AdminLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [verifyMessage, setVerifyMessage] = useState({
        text: undefined
    });

    const { setUserData } = useContext(UserContext);
    const history = useHistory();


    const submit = async (e) => {
        
        e.preventDefault();

        const loginAdmin = { email, password };
        const loginRes = await Axios.post(
            "http://localhost:8080/api/login", {
                loginAdmin
            });

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
    }


return (
<div className="page">
    <h2>Admin Login</h2>

    <h3>{verifyMessage.text}</h3>

    <form className="form" onSubmit={submit}>

        <label htmlFor="login-email">Admin Email</label>
        <input id="login-email" type="email" onChange={e => setEmail(e.target.value)} />

        <label htmlFor="login-password">Admin Password</label>
        <input id="login-password" type="password" onChange={e => setPassword(e.target.value)} />

        <button type="submit">Submit</button>

    </form>
</div>

)
}
export default AdminLogin;
