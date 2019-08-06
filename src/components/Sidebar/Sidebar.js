import React from 'react';
import './Sidebar.css';
import {  Nav } from 'react-bootstrap'

const Sidebar = ({ rooms, activeRoomId, setActiveRoomId, username, onlineFor }) => {
 

  return (   
    <div className="sidebar">
        <div className="userinfo">
            <div>{username}</div>
            <div>online for {onlineFor} minutes</div>
        </div>
        <div className="flex-column">
          {
            rooms.map((room) => {
              return (
                <div key={room.id} className={room.id === activeRoomId? "active": ""} onClick={() => setActiveRoomId(room.id)}>
                  {room.name}
                </div>
              )
            })
          }
        </div>
    </div>

  );
}

export default Sidebar;