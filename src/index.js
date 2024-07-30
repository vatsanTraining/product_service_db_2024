import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RouteConfigs } from "./RouteConfig";
import OfficeContext from "./OfficeContext";
import { Provider } from "react-redux";
import { store } from "./Store";
import ReduxCompOne from "./ReduxCompOne";
import AxiosExample from "./AxiosExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      <App />
      <RouteConfigs></RouteConfigs>
    </BrowserRouter>
    </Provider>
<AxiosExample></AxiosExample>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
