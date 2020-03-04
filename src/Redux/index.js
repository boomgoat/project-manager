import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./Reducers";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import fbConfig from "../config/fbConfig";
import firebase from "firebase/app";

//STORE - Globalized State
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

store.subscribe(() => console.log(store.getState()));

//Dispatch

export default store;
