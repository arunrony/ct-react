import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PublicRoute = ({component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    localStorage.getItem("isAuthenticated") ? (
      <Redirect to="/dashboard"/>
    ) : (
      <Component {...props} />
    )
  )}/>
)

export default PublicRoute
