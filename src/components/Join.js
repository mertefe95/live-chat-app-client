import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "./context/UserContext";

function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData)
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join into a Room</h1>
                <div className="join-select-div"><select placeholder="" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} >
                        <option value="General">General</option>
                        <option value="Politics">Politics</option>
                        <option value="Fun">Fun</option>
                    </select>
                </div>
                <Link>
                    <button className="join-button" type="submit">Join to the Room</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
