import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  </React.StrictMode>
);
