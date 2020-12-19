import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { set } from "mongoose";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'http://localhost:8080'

  useEffect(() => {
    const { name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);
    
    setName(name);
    setRoom(room);
  
    socket.emit('join', { name, room }, ({ error }) => {
      alert(error);
    }); 

    return () => {
      socket.emit('disconnect');
    }

  }, [ENDPOINT, location.search]);

return (
  <h1>Chat</h1>
)}
export default Chat;
