import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import React from "react";
import SetPassword from "./pages/setpassword/SetPassword";
import LoginPage from "./pages/login/LoginPage";
import {CssBaseline} from "@material-ui/core";
import SignupPage from "./pages/signup/SignupPage";
import PasswordResetPage from "./pages/passwordreset/PasswordResetPage";
import ContactPage from "./pages/contact/ContactPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import RouteList from "./routes/RouteList";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
          <Switch>
            <RouteList/>
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  );
}

export default App;
