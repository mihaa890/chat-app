import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = useState("");
  const [userName, setUsername] = useState("")

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };
  const handleUserNameChange = (e) => {
      setUsername(e.target.value)
  }

  return (
      <div className="wrapper">
    <div className="home-container">
        <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={handleUserNameChange}
        className="text-input-field"
      />
      <input
        type="text"
        placeholder="room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}/${userName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
    </div>
  );
};

export {Home};