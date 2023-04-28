import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { authAction } from "../store/authSlice";
import Form from "./Form";

const Auth = () => {
  const [status, setStatus] = useState(useLocation().pathname);
  //const status = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleStatus = (payload) => {
    console.log("asd", payload);
    if (payload) {
      setStatus("login");
      navigate("/auth/login");
    } else {
      setStatus("signup");
      navigate("/auth/signup");
    }
  };
  const handleAuth = (user) => {
    const local = { token: user.token, userId: user.id };
    localStorage.setItem("user", JSON.stringify(local));

    dispatch(authAction.setUser(user));
    console.log(user);
    navigate("/home");
  };
  return (
    <div>
      <Form
        status={status}
        handleStatus={handleStatus}
        handleAuth={handleAuth}
      />
    </div>
  );
};

export default Auth;
