# React Basics

![react](../images/logo.png)

### Installation

`npx install create-react-app <your-app-name>`

_`npx` allows us to **not** install create-react-app package globally and just run this one command to install the dependencies locally and create our app_

### Environment

_`create-react-app` is a tool that allows for quick implementation of react. babel and webpack are used to convert react js into an older version that our current browsers can understand_

![under-the-hood](../images/babel-webpack.png)

---

## ReactDOM/VirtualDOM

### Main file structure

#### App.js

_this function returns a block of html (written with jsx)_

```javascript
import React from 'react'

function App() {
    return (
        <div className='App'>
            <jsx>
        </div>
    );
}
```

#### index.js

_this function looks at the document and finds `'root'` id, then **replaces** with html returned by `<App />` function_

```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

#### public/index.html

_this html file where our html is injected, entryway for our application_

```html
<body>
  <div id="root"></div>
</body>
```

### Class Component

```javascript
// destructuring `Component`
import React, { Component } from "react";
```

state = js object with properties you can access _at anytime inside our class_

```javascript
class App extends Component {
  // override constructor by calling const method
  constructor() {
    // super calls constructor method on 'Component' Class
    super();

    // super gives us access to this.state obj
    this.state = {
      // set property on state obj
      string: "Hello World",
    };
  }
  render() {
    // render property from our state
    return <p>{this.state.string}</p>;
  }
}
```

_`{curly braces}` execute js expression, can wrap a variable_

```javascript
    <p>{this.state.string}</p>
    {/* modify state obj using setState() from 'Component'
          every jsx element has attributes like 'onClick' */}
    <button onClick={() => this.setState({ string: "Heii Verden" })}><button>
  </div>
```

_`onClick` is an jsx attribute that can take a function, `setState()` is a method inherited from the super 'Component' class and can take properties and their values_

We are **NOT ALLOWED** to modify state in react unless using seState(), this _enforces unidirectional data flow_

### Lifecycle methods of the Class Component

**mounting** is when react renders jsx on the DOM
`componentDidMount()` is called when react renders on the DOM for the **first** time.

```javascript
componentDidMount() {
    // code executes when component rendered on DOM
}
```

---

## Important Javascript Functions

### map()

_map() gives us the return of any function we pass it, iterated over every element in the passed in array_

```javascript
this.state = {
  // we can now set a property on the state obj
  monsters: [
    {
      name: "Frankenstein",
      id: "asr1",
    },
    {
      name: "Dracula",
      id: "sdf2",
    },
    {
      name: "Zombie",
      id: "asw3",
    },
  ],
};

// ...
<div className="App">
  {this.state.monsters.map((monster) => (
    <h1 key={monster.id}> {monster.name}</h1>
  ))}
</div>;
```

_JSX `key=` attribute helps react keep track of elements that change on the DOM so it doesn't have to re-render the whole DOM if one element changes_

### Javascript async event handling

#### Before promises, massive pyramid of callback hell

```javascript
getSomething('getThis', (callbackFunction, error) => {
    // if error
    throw(error)
    // else
    const callbackFunctionId = callbackFunction.id

    getSomethingElse(callbackFunctionId (anotherCallback, error) => {
        // if error
        throw(error)
        // else
        const anotherCallbackProp = anotherCallback.prop

        getAnotherNestedCallback(){
            // ...
        }
    })
})
```

#### ES6 Introduces Promises

- .then is used when a promise is resolved and can keep being chained together to continue resolve and returning what information you need from an object much like our _callback hell_ can return information from an object

_A new promise is passed a function that will be in a state of **pending** until either the `resolve` or `reject` has been called_

```javascript
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    // after 1 sec execute resolve
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  } else {
    reject("failed");
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));
```

- Promises provide control over something _uncertain_, like an API call
- Allows us to handle our _successes_ with `.then`
- Allows us to handle our _failures_ with `.catch`

_`.then` can only be called on a **resolved** promise_

- `fetch()` returns a promise value, therefore we can get a .then that is `{pending}` followed by another .then that is the resolved function

#### ES7 introduces Async Await

- Promises re
