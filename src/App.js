import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navs">
            <ul>
              <li>
                <Link to="/">First Page of given task</Link>
              </li>
              <li>
                <Link to="/secondPage">Second Page of given task</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/secondPage">
              <ForgotPassword/>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
