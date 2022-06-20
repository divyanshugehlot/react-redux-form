import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "../feature/userSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function Signup() {
  const dispatch = useDispatch();
  const [username, setuserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const add = useSelector((state) => state.user.value);
  const navigate = useNavigate();//navigate 

  const userSignup = () => {
    if (username && name && password) {
      dispatch(
        addUsers({ id: add[add.length - 1].id + 1, username, name, password })
      );
      navigate("/");
    }
  };
  return (
    <div className=" userInfo">
      <div className=" container d-flex w-100 justify-content-center align-items-center ">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  required
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter User Name"
                  onChange={(event) => {
                    setuserName(event.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={userSignup}>
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
