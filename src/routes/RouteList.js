import PublicRoute from "./PublicRoute";
import LoginPage from "../pages/login/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SignupPage from "../pages/signup/SignupPage";
import {Route} from "react-router-dom";
import PasswordResetPage from "../pages/passwordreset/PasswordResetPage";
import ContactPage from "../pages/contact/ContactPage";
import SetPassword from "../pages/setpassword/SetPassword";
import React from "react";

const RouteList = () => {
  return (
    <>
      <PublicRoute path="/" exact component={LoginPage}/>
      <PublicRoute exact path="/signup" component={SignupPage}/>
      <PublicRoute exact path="/password-reset" component={PasswordResetPage}/>
      <PublicRoute exact path="/contact-us" component={ContactPage}/>
      <PublicRoute exact path="/set-password/:uid/:token" component={SetPassword}/>
    </>
  )
}

export default RouteList