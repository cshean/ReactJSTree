import React, { Component } from 'react';
import './App.css';

class Buttons extends Component {
  render () {
    //TODO: the button's onclick event will pass the input to the lambda function
    //offset in bootstrap 4 is just offset, not col-offset
    return (
      <div id="optionsDiv" class="container">
      <form method="post" id="form1">
        <div id="inputDiv" class="row">
          <div class="col-4 offset-4 text-center">
            <label>Number of levels desired: </label>
          </div>
          <div class="col-4 offset-4">
            <input type="text" name="levels" id="levels"/>
          </div>
          <div class="col-4 offset-4">
            <label>Name: </label>
          </div>
          <div class="col-4 offset-4">
            <input type="text" name="baseName" id="baseName"/>
          </div>
        </div>

        <div class="row text-center" id="buttonDiv">
          <div class="col-2 offset-5">
            <button type="submit" form="form1" value="Submit" class="btn btn-primary" id="searchBtn">Search</button>
          </div>
        </div>
        </form>
      </div>
    )
  }
}


export default Buttons;
