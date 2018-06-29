import React, { Component } from 'react';
import './App.css';

class Buttons extends Component {
  state = {
    fileName: "",
    depth: "",
  }

//changes the name to the value of e
 change = (e) => {
   this.setState({
     [e.target.name] : e.target.value
   });
 };

 onSubmit = e => {
   e.preventDefault();
   this.props.onSubmit(this.state);
 };

  render () {
    //TODO: the button's onclick event will pass the input to the lambda function
    //offset in bootstrap 4 is just offset, not col-offset
    return (
      <div id="optionsDiv" className="container">

        <form method="post" id="form1">

          <div id="inputDiv" className="row">
            <div className="col-4 offset-4 text-center">
              <p>Number of levels desired: </p>
            </div>
            <div className="col-4 offset-4">
              <input
                name="depth"
                type="text"
                placeholder="ex: 5"
                id="levels"
                value={this.state.depth}
                onChange={e => this.change(e)}
                />
            </div>
            <div className="col-4 offset-4">
              <label>Filename:</label>
            </div>
            <div className="col-4 offset-4">
              <input
                name="fileName"
                type="text"
                placeholder="ex: data.json"
                id="fileName"
                value={this.state.fileName}
                onChange={e => this.change(e)}
                />
            </div>
          </div>

          <div className="row text-center" id="buttonDiv">
            <div className="col-2 offset-5">
              <button
                form="form1"
                onClick={e => this.onSubmit(e)}
                className="btn btn-primary"
                id="searchBtn">
                Search
                </button>
            </div>
          </div>

        </form>

      </div>
    )
  }
}


export default Buttons;
