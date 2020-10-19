import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 } from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/Users';
// import Home from './pages/Home';
import './App.css';

function App() {
  return (
    
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/home" activeStyle={{
              fontWeight: 'bold'
            }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/products">Dashboard</NavLink>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
