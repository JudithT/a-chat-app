import React, { useEffect, useState } from 'react';
import './Messagebar.css';
import { axiosInstance } from "../../config";


const Messagebar= ({activeRoomId, username}) =>{
const [messages, setMessages] = useState([])
const [loading, setLoading ] = useState(true);

  useEffect(()=>{
    axiosInstance.get(`/rooms/${activeRoomId}/messages`)
    .then((res)=> {
      setMessages(res.data);
      setLoading(false);
    })
    .catch((err)=> {
     alert(err.message);
    })
  })

  return (
    <div className="message-container">

        {
          messages.map(message => {
            const isUserMessage = username.toLowerCase() === message.name.toLowerCase();
            return (<div className={isUserMessage? "user-message": "member-message"}>
            <div className={isUserMessage? "user-message-content": "member-message-content"}>{message.message}</div>
            {!isUserMessage && <div className="member-name">{message.name}</div>}
            </div> 
            )
          })
        }
          
    </div>

  );
}

export default Messagebar;
