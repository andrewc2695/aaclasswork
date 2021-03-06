import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import { thunkLogin, thunkLogout, thunkSignup } from "./actions/session_actions";
import { login, logout, signup } from "./util/session_api_util";



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.thunkLogin = thunkLogin;
  window.thunkSignup = thunkSignup;
  window.thunkLogout = thunkLogout
  window.login = login
  window.signup = signup;
  window.logout = logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});
