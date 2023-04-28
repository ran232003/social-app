import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "./authPage/Auth";

const ProtectedRoutes = (props) => {
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const user3 = useSelector((state) => {
    return state.auth;
  });
  // const user2 = props.user;
  // const u = props.u;

  return user ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoutes;
