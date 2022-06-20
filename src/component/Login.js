import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isAuthenticated, addUsers } from "../feature/userSlice";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
function Login() {
  const isUser = useSelector((state) => state.user.isAuthenticated);
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ifAuthenticated = () => {
    setSubmitted(true);
    dispatch(isAuthenticated({ username: username, password: password }));
  };

  useEffect(() => {
    if (submitted) {
      if (isUser) {
        navigate("/users-info");
      } else {
        console.log("error incorrect user name or password");
      }
    }
  }, [isUser]);

  return (
    <div className=" userInfo">
      <div className=" container d-flex w-100 justify-content-center align-items-center ">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={ifAuthenticated}
                className="m-3"
                disabled={submitted}
              >
                login
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={() => navigate("/sign-up")}
                disabled={submitted}
              >
                Signup
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
