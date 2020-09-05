import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
          <Header />
            <h1>CHECKOUT</h1>
          </Route>

          <Route path="/login">
          <Header />
            <h1>LOGIN</h1>
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
