import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import SignInSide from "./components/SignInSide";
import SignUpSide from "./components/SignUpSide";
import React from "react";
import Header from "./components/core/appbar/header";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Route path="/" exact component={SignInSide}/>
                <Route exact path="/signup" component={SignUpSide}/>
            </Router>
        </Provider>
    );
}

export default App;
