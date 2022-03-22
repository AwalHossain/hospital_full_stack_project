import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const ProtectedRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className="spinner mt-10">Loading.......</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute