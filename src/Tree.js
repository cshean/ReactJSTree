import React, { Component } from 'react';
import './App.css';
import {select} from 'd3-selection';
import {hierarchy, tree} from 'd3-hierarchy'
import {layout, json} from 'd3';

//JS cannot have class variables
//this needs to be just plain json, not a string
const jsonData =
 {
   "name": "Faro",
   "children": [
     {
       "name": "Faro_db",
       "children": [
         { "name": "Faro_mongodb"},
         { "name": "Faro_mysql"},
         {"name": "Faro_sql_server"},
         {"name": "Faro_orientdb"}
       ]
     },
     {"name": "Faro_aws",
     "children": [
       {"name": "Faro_ec2"},
       {"name": "Faro_cloudformation"},
       {"name": "Faro_s3"}
     ]}
   ]};

class Tree extends Component {

  //called when code is generated
   componentDidMount() {
      this.createTree()
   }

   //creates a tree
   createTree() {
     // set the dimensions and margins of the diagram
     var margin = {top: 150, right: 100, bottom: 100, left: 150};
     //the json file should be in the source directory
     //var jsonFile = require('.\\data.json');
     const treestruct = tree().size([200,200]);
     const node = select(this.node);
     node.style('border', '1px solid black');

     //function that handles json data in a file, passes to anonymous function
     //TODO: this is giving an error when trying to read in a file,
     //possibly has to do with async calls
     var nodes;
     //json("../data.json", function(error, data){
    //   if (error) throw error;
      //gets the root node of the JSON data
       nodes = hierarchy(jsonData);
       //calling treestruct (equivalent of "tree") on the nodes creates a tree
       nodes = treestruct(nodes);
    //});

     ///select the svg element created in the react app and append a g element
     //which is a container inside svg
     var svg = select("svg"),
     g = svg.append("g").attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

     //create the links in between the nodes
     var link = g.selectAll(".link")
     .data( nodes.descendants().slice(1))
     .enter().append("path")
     .attr("class", "link")
     .attr("d", function(d) {
       return "M" + d.x + "," + d.y
       + "C" + d.x + "," + (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," + d.parent.y;
       });

       //selects all the nodes, gives them the data of the descendants of the
       //root in the hierarchy, then appends them as groups
       //adds a class attribute TODO: what does the class attribute do?
       //adds a transform function the places the nodes at a specific point on the map
       var point = g.selectAll(".node")
       .data(nodes.descendants())
       .enter().append("g")
       .attr("class", function(d) {
         return "node" +
         (d.children ? " node--internal" : " node--leaf"); })
       .attr("transform", function(d) {
         return "translate(" + d.x + "," + d.y + ")"; });


       // adds the circle to the node with radius 10
       point.append("circle")
       .attr("r", 10);


       point.append("text")
      .attr("dy", ".35em")
      .attr("y", function(d) { return d.children ? -20 : 20; })
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.name; });

   }

  //to insert multiple elements there must be a containing div or element
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <svg id="treestruct" ref={node => this.node = node}
            width={500} height={500}>
            </svg>
          </div>
         </div>
      </div>
    )
  }
}

export default Tree;
