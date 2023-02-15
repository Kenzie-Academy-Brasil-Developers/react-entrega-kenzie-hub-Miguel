import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return <>{user ? <Outlet /> : null}</>;
};
