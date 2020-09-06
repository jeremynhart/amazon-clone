import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from "./Main";
import Checkout from './Checkout';
import Login from './Login'
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
            //Logged In
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
            //Logged Out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>

          <Route path="/login">
          <Login />
          </Route>

          <Route path="/">
            <Header />
            <Main />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
