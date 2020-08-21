import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // The arrow function can bind "this" to our "App" class when it is instantiated because because it is lexically scoped
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // destructuring state object, setting constants to state properties
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // render jsx
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
