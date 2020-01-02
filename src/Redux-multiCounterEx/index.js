import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./index.css";

import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);

const ReduxMultiCounter = () => {
  return (
    <Provider store={store}>
      multi counter example!
      <App />
      <hr />
    </Provider>
  );
};

export default ReduxMultiCounter;
