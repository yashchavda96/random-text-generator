import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="light-blue lighten-1">
        <div className="container nav-wrapper">
          <a href="#!" className="brand-logo" style={{paddingLeft:"10px"}}>Random Text Generator</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/yashchavda96">Github</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
