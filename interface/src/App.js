import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routes'
import Sidebar from './components/Sidebar'

import './App.css';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (

    <Router>
      <div className="main_window">
        <div className="main_page">
          <Sidebar />
          <div className="">

            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
