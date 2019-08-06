import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from '../../components/Sidebar/Sidebar'
import Bottombar from '../../components/Bottombar/Bottombar';
import Topbar from '../../components/Topbar/Topbar';
import Messagebar from '../../components/Messagebar/Messagebar';
import { axiosInstance } from "../../config";


const Main = () => {

  const [rooms, setRooms] = useState([]);
  const [messageBarKey, setMessageBarKey]= useState("1");
  const [activeRoomId, setActiveRoomId] = useState(0);

  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username");
  const loggedInAt = localStorage.getItem("loggedInAt");
  const diff = new Date() - new Date(loggedInAt)
  const onlineFor = Math.floor((diff/1000)/60);

  useEffect(()=>{
    axiosInstance.get("/rooms")
    .then((res)=> {
      setRooms(res.data);
      setLoading(false);
    })
    .catch((err)=> {
     alert(err.message);
    })
  })


  const newMessageAdded = () => {
    setMessageBarKey(Math.random())
  }


  if(loading){
    return <div>loading ...</div>
  }

  return (
    <Container fluid={true}>
      <Row >
        <Col className="sidebar" xs={2}>
          <Sidebar rooms={rooms} 
            activeRoomId={activeRoomId} 
            setActiveRoomId={setActiveRoomId}
            username={username}
            onlineFor={onlineFor}/>
        </Col>
       
       
        <Col xs={10}>
          <Topbar activeRoomId={activeRoomId} username={username}/>
          <Messagebar key={messageBarKey} activeRoomId={activeRoomId} username={username} newMessageAdded={newMessageAdded} />
        <Bottombar activeRoomId={activeRoomId} username={username}/>   
        </Col>
      </Row>
  </Container>

  );
}

  export default Main;