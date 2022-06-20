import React from 'react'
import { useSelector} from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from './Header';
function Userinfo() {
  const addUser = useSelector((state) => state.user.value);
  return (
    <div>
    <Header/>
    <div className=" userInfo">
     
    <div className=" container d-flex w-100 justify-content-center align-items-center userInfo-card ">
       <Card style={{ width: '25rem' }}>
        <ListGroup variant="flush">
      {addUser.map((user) => {
        return ( <div key={user.id}>
          <ListGroup.Item className="text-center">ID : {user.id}</ListGroup.Item>
          <ListGroup.Item className="text-center">name : {user.name}</ListGroup.Item>
          <ListGroup.Item className="text-center">User Name : {user.username}</ListGroup.Item>
          
        </div>
        
      );
    })}
    </ListGroup>
  </Card>
  </div>
  </div>
  </div>
  )
}

export default Userinfo