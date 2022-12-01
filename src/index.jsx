import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./store/reducers/index"
import Routes from "./router/routes";
import TranslateButton from "./components/buttons/translate-button";

import "./locales/i18n";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

ReactDOM.render(
     <Provider
          store={createStore(rootReducer)}
     >
          <BrowserRouter>
               <TranslateButton />
               <Routes />
          </BrowserRouter>
     </Provider>,
     document.getElementById("root")
);
