/*import React, { Component } from 'react';
import './App.css';
import {select} from 'd3-selection';
import {hierarchy, tree} from 'd3-hierarchy'
import {layout, json} from 'd3';

class Tree extends Component {
  //called when code is generated
   componentDidMount() {
      this.createTree()
   }

   //creates a tree
   createTree() {
     //the json file should be in the source directory
     //var jsonFile = require('.\\data.json');
     var jsonData = "{\"name\":\"Faro\",\"children\":[{\"name\": \"Faro_db\",\"children\": [{\"name\": \"Faro_mongodb\"},{\"name\": \"Faro_mysql\"},{\"name\": \"Faro_sql_server\"},{\"name\": \"Faro_orientdb\"}]},{\"name\": \"Faro_aws\",\"children\": [{\"name\": \"Faro_ec2\"},{\"name\": \"Faro_cloudformation\"},{\"name\": \"Faro_s3\"}]}]}";
     const treestruct = tree().size([400,400]);
     const node = select(this.node);
     node.style('background', 'silver').style('border', '1px solid black');



     //function that handles json data
     //first parameter is the file, second is a function
     //with the body specified in the curly braces
     JSON.parse(jsonData, function(error, data){
       var nodes = treestruct.nodes(data);
     });

   }

  //to insert multiple elements there must be a containing div or element
  render () {
    return (
      <div class="container">
        <div class="row">
          <div class="col-4 offset-4">
            <p> Tree Graphic goes here</p>
          </div>
        </div>
        <div class="row">
          <div class="col-8 offset-2">
            <svg id="treestruct" ref={node => this.node = node}
            width={500} height={500}>
            </svg>
            </div>
          </div>
      </div>
    )
  }
}

export default Tree;*/
