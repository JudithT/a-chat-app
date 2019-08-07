import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import './User.css';

 const User= (props) => {
  const [username, setUsername] = useState("");

  const handleSumbit = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("loggedInAt", new Date());
    props.history.push("/chats");

  }
  return (
    <div className="page-center">
      <form className="user-form">
        <div className="top">
        <label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Type your username..."/>
        </label>
        </div>
        <div className="bottom">
          <Button disabled={!username} variant="danger" onClick={handleSumbit}>Join the Doordash chat!</Button>
        </div>
      </form>
    </div>
  );
}

export default User;