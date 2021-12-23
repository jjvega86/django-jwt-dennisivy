import { Route, Navigate } from "react-router-dom";

import React from "react";

const PrivateRoute = ({ children }) => {
  console.log("Private route works");
  return true ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
