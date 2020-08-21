import React, { Component } from "react";
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
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
