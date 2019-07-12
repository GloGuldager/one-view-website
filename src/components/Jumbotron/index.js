import React from "react";
import "./Jumbotron.css";
import logo from './OneViewLogo.png';
// import './App.css';

function Jumbotron({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 className="App-title">Welcome to OneView Reviews!</h1> */}
      </header>
      <h3 className="App-intro">
        <p className="instruction"><strong>test</strong></p>
        <p className="instruction"><strong>but try not to click an image more than once!</strong></p>
        {/* <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
        <p className="message"><strong>{this.state.message}</strong></p> */}
      </h3>
    </div>

    // <div
    //   style={{ height: 250, clear: "both", paddingTop: 120, textAlign: "center" }}
    //   className="jumbotron">
    
    //   {children}
    // </div>
  );
}

export default Jumbotron;
