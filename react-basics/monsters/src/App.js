import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  // override constructor by calling method
  constructor() {
    // super calls constructor method on our parent 'Component' Class
    super();

    // super gives us access to this.state obj on the 'Component' Class
    this.state = {
      // we can now set a property on the state obj
      monsters: [
        // initialize empty array in state
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;
