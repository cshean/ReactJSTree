import React, { Component } from 'react';
import './App.css';
import Tree from './Tree'
import * as d3 from "d3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello There! </h1>
        <Tree/>
      </div>
    );
  }
}

export default App;
