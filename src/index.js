import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login/login";
import Createuser from "./Login/Createuser";
import "./styles.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/createuser">CreateUser</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Route path="/createUser" component={Createuser} />
    </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(routing, rootElement);
