import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const User = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-container">
        <h1>Hey {User[User.length - 1].name} Welcome</h1>
      </div>

      <div
        className="header-container-logout"
        onClick={() => {
          navigate("/");
        }}
      >
        <b> LOGOUT</b>
      </div>
    </div>
  );
}

export default Header;
