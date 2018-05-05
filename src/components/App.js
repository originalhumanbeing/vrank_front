import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home/Home'
import About from './About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <div className="main-logo">LOGO!!!!</div>
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">평가하기</Link></li>
                    <li className="nav-item"><Link to="/search">검색하기</Link></li>
                    <li className="nav-item"><Link to="/user">가입/로그인</Link></li>
                </ul>
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
