import PublicRoute from "./PublicRoute";
import LoginPage from "../pages/login/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SignupPage from "../pages/signup/SignupPage";
import PasswordResetPage from "../pages/passwordreset/PasswordResetPage";
import ContactPage from "../pages/contact/ContactPage";
import SetPassword from "../pages/setpassword/SetPassword";
import React from "react";
import DashboardPage from "../pages/DashboardPage";
import {Switch} from "react-router-dom";

const RouteList = () =>
   (
    <Switch>
      <PublicRoute path="/" exact component={LoginPage}/>
      <PublicRoute exact path="/signup" component={SignupPage}/>
      <PublicRoute exact path="/password-reset" component={PasswordResetPage}/>
      <PublicRoute exact path="/contact-us" component={ContactPage}/>
      <PublicRoute exact path="/set-password/:uid/:token" component={SetPassword}/>
      <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
    </Switch>
  )


export default RouteList