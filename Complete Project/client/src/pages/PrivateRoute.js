import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = window.localStorage.getItem("isAuthenticated");

const PrivateRoute = ({ component: Component , authenticated: authenticated, ...rest }) => (
  <Route
    {...rest}
    render={() =>
       authenticated === true ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
