import {BrowserRouter, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import React from "react";
import {CssBaseline} from "@material-ui/core";
import RouteList from "./routes/RouteList";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
            <RouteList/>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  );
}

export default App;
