import React, { Component } from 'react';
import './App.css';
import Tree from './Tree'
import Buttons from './Buttons'

class App extends Component {

  // TODO: not sure where the getTree function should go, but it should take in the props from
  // the input boxes and pass them to this function, where the function sends them
  // as a request to the backend function (which will be a dummy function at this point)

  onSubmit = fields => {
    console.log("App component got ", fields)
  }

  render() {
    return (
      <div className="App">
        <div id="pageTitle">
          <h1>Dependency Tree Browser</h1>
        </div>
        <Tree size={[500,500]}/>
        <Buttons onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}

export default App;
