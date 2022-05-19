import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from './context/auth/authContext';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  // if (localStorage.token) {
  //   jwt.verify(
  //     localStorage.getItem('token'),
  //     'N8IYoBg5UHeZUAhCXsuVkS0WOSgPcVkje0AFY37sHkEJ2O9eABudUU5o7y6JP0qi',
  //     (err, decode) => {
  //       if (err) {
  //         logout();
  //       }
  //     }
  //   );
  // }

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('authenticated') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
