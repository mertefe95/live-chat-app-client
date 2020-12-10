import React from 'react'
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <div>
            Welcome to the Live Chat Application, please register from here <Link to="/register">Register</Link> to be able to join the chat rooms.
        </div>
    )
}

export default Homepage
