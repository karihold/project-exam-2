import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ isAdmin, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
