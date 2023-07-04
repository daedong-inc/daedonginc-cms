import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "src/utils/auth";

interface AuthHOCProps {
  component: React.ComponentType<any>;
  fallback?: React.ReactNode;
}

const AuthHOC: React.FC<AuthHOCProps> = ({ component: Component, ...rest }) => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return <Component {...rest} />;
  }

  if (isAuthenticated()) {
    return <Component {...rest} />;
  }

  return <Navigate to="/login" replace />;
};

export default AuthHOC;
