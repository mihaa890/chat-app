import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import useChat from "../useChat";
import '../chat/Chat.css'

const Chat = (props) => {
  const { roomId, username} = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);

  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  console.log("message" , messages)


  return (<div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <h2 className="user-name">User: {username}</h2>
            <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
            {message.body} 
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
   
  );
};

export  {Chat};