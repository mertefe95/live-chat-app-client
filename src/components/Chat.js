import React, { useState, useEffect, useContext } from 'react'
import queryString from "query-string";
import io from "socket.io-client";
import UserContext from "./context/UserContext";



const Chat = ({ location }) => {
  const { userData, setUserData } = useContext(UserContext);
    console.log(userData)

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    const ENDPOINT = 'http://localhost:8080'

    let socket;

    useEffect(() => {
        const { username, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);

        console.log(username);
        console.log(room);

        setUsername(username);
        setRoom(room);

        socket.emit('join', { username, room }, ({ error }) => {
            alert(error);
        });
    }, [ENDPOINT, location.search])

    return (
        <h1>Chat.</h1>
    )}

export default Chat
