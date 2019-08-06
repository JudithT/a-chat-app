import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { axiosInstance } from "../../config";





const Topbar = ({activeRoomId,username}) => {

const [roomName, setRoomName] = useState("");
const [users, setUsers] = useState([])

  useEffect(()=>{
    axiosInstance.get(`/rooms/${activeRoomId}`)
    .then((res)=> {
      setRoomName(res.data.name);
      setUsers(res.data.users.filter((user) => user.toLowerCase() !== username.toLowerCase()));
    })
    .catch((err)=> {
     alert(err.message);
    })
  })
  
  return (
    <div>
        <div className="header">
            <div><h2>{roomName}</h2></div>
            <div className="participants"><span className="primary_user">{username}, </span>{users.join(" ,")}</div>
        </div>
        
    </div>




  );
}

export default Topbar;