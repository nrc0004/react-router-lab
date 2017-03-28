import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <link to= ""></link>
            <link to= ""></link>
          </nav>
          <main>
            <route path="" render={} />
              <route path="" render={} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
