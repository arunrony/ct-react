import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    localStorage.getItem("isAuthenticated") === "true" ? (
      <Component {...props} />

    ) : (
      <Redirect to="/"/>
    )
  )}/>
)

export default PrivateRoute
