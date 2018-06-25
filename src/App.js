import React, { Component } from 'react';
import './App.css';
import Tree from './Tree'
import Buttons from './Buttons'



class App extends Component {

  const jsonData ='{	"name": "Faro",	"children": [		{		"name": "Faro_db",		"children": [			{"name": "Faro_mongodb"},			{"name": "Faro_mysql"},			{"name": "Faro_sql_server"},			{"name": "Faro_orientdb"}		]		},		{		"name": "Faro_aws",		"children": [			{"name": "Faro_ec2"},			{"name": "Faro_cloudformation"},			{"name": "Faro_s3"}		]		}	]}';

  // TODO: not sure where this function should go, but it should take in the props from
  // the input boxes and pass them to this function, where the function sends them
  // as a request to the backend function (which will be a dummy function at this point)
  //getTree() {}



  render() {
    return (
      <div className="App">
        <div id="pageTitle">
          <h1>Dependency Tree Browser</h1>
        </div>
        <div id="treeWrapper" style={{width: "750px", height: "750px"}}
          <Tree data={jsonData}/>
        </div>
        <Buttons/>
      </div>
    );
  }
}

export default App;
