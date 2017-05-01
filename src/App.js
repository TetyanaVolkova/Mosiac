import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="header">
          <a href="#">
            <img src="images/ML_headerlogo_37.png" alt="logo" />
          </a>
        </div>
        <nav className="navbar navbar-default">
         <div className="container-fluid">
           <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
             <a className="navbar-brand" href="#">Tetyana Assignment</a>
           </div>
           <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav navbar-nav">
               <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
               <li><NavLink activeClassName="activeNav" to="/about">About</NavLink></li>
               <li><NavLink exact activeClassName="activeNav" to="/trainings">Trainings</NavLink></li>
             </ul>
           </div>
         </div>
       </nav>
       {this.props.children}
      </div>
    );
  }
}

export default App;
