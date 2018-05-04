import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import Home from './home/Home'
import About from './About'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <hr/>
            </div>
        </header>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
