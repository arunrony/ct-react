import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import React from "react";
import SetPassword from "./pages/setpassword/SetPassword";
import LoginPage from "./pages/login/LoginPage";
import {CssBaseline} from "@material-ui/core";
import SignupPage from "./pages/signup/SignupPage";
import PasswordResetPage from "./pages/passwordreset/PasswordResetPage";

function App() {
    return (
        <Provider store={store}>
            <CssBaseline>
                <Router>
                    <Route path="/" exact component={LoginPage}/>
                    <Route exact path="/signup" component={SignupPage}/>
                    <Route exact path="/password-reset" component={PasswordResetPage}/>
                    <Route exact path="/set-password/:uid/:token" component={SetPassword}/>
                </Router>
            </CssBaseline>
        </Provider>
    );
}

export default App;
