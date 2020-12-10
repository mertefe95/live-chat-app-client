import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../AuthOptions";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h1>Live Chat App!</h1>
            </Link>
            <AuthOptions />
        </div>
    )
}

