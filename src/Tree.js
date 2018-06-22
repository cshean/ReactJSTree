import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
//import * as d3 from "d3";

class Tree extends Component {
  render () {
  /*var canvas = d3.select("body")
    .append("svg")
    .attr("width", 700)
    .attr("height", 700);

    //appends the circle to the canvas with the given properties
    var circle = canvas.append("circle")
      .attr("cx", 50) //x position
      .attr("cy", 50) //y position
      .attr("r", 50) //radius
      .attr("fill", "blue"); //color
      */

      //code to create svg element
      /*<svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>*/
    //to insert multiple elements there must be a containing div or element
    return (
      <div class="container">
        <div class="row">
        <div class="col-4 offset-4">
        <p> Tree Graphic goes here</p>
        </div>
        <img src="https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/_images/BinArray.png" alt="graphical tree"/>
        </div>
      </div>
    )
  }
}




export default Tree;
