import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import fbConfig from "./config/fbConfig";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
