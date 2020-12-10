import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "./context/UserContext";


const ForgotPassword = () => {

    const [email, setEmail] = useState();
    const [verifyMessage, setVerifyMessage] = useState({
        text: undefined
    });

    const { setUserData } = useContext(UserContext);
    const history = useHistory();


    const submit = async (e) => {
        e.preventDefault();
        const currentUser = { email  };
        await Axios.post(
            "http://localhost:8080/api/forgot-password", 
            currentUser
        );

        await setVerifyMessage({
            text: "Please check your email for password change."
        })

    }


return (
<div className="page">
    <h2>Forgot Password</h2>

    <h4>Please enter your email for password change.</h4>

    <h3>{verifyMessage.text}</h3>

    <form className="form" onSubmit={submit}>

        <label htmlFor="forgot-email">Email</label>
        <input id="forgot-email" type="email" onChange={e => setEmail(e.target.value)} />


        <button type="submit">Submit</button>
    </form>
</div>

)
}
export default ForgotPassword;
