import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // override constructor by calling method
  constructor() {
    // super calls constructor method on our parent 'Component' Class
    super();

    // super gives us access to this.state obj on the 'Component' Class
    this.state = {
      // we can now set a property on the state obj
      string: "Hello World",
    };
  }
  render() {
    // render the property from our state
    return (
      <div className="App">
        <p>{this.state.string}</p>
        {/* modify state obj using setState() from 'Component' 
          every html element has properties like 'onClick' */}
        <button
          onClick={() => this.setState({ string: "Heii Verden" })}
        ></button>
      </div>
    );
  }
}

export default App;
