# React Basics

![react](../images/logo.png)

### Installation

`npx install create-react-app <your-app-name>`

_`npx` allows us to **not** install create-react-app package globally and just run this one command to install the dependencies locally and create our app_

### Environment

_`create-react-app` is a tool that allows for quick implementation of react. babel and webpack are used to convert react js into an older version that our current browsers can understand_

![under-the-hood](../images/babel-webpack.png)

### Basic Architecture Considerations

1. If the component has jsx in it, use the .jsx extension
2. There are 2 types of react components _functional & class based_
3. Folder structure is very important considering overall app architecture.
4. Break into small pieces that have one purpose/function

---

## ReactDOM/VirtualDOM

### Basic Files

#### App.js

_This function returns a block of html (written with jsx)_

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

_This function looks at the document and finds `'root'` id, then **replaces** with html returned by `<App />` function_

```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

#### public/index.html

_This html file where our html is injected, entryway for our application_

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

`state` = js object with properties you can access _at anytime inside our class_

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

### Class Methods

Use the arrow function when declaring class methods because js is able to lexically scope the method and bind "this" to the "Class." Therefore you do not have to "bind" the this.method in the constructor to the method defined outside the constructor.

> Use arrow functions on any class methods you define that aren't part of React (i.e. render(), componentDidMount()).

_Without lexical scoping_

```javascript
constructor() {
    this.classMethod = this.classMethod.bind(this)
  }

classMethod(e) = {
    this.setState({ // ..
}
```

_With lexical scoping, no need to bind in constructor_

```javascript
classMethod = (e) => {
  this.setState({ // ..
};
```

### Lifecycle Methods of the Class Component

**mounting** is when react renders jsx on the DOM,
`componentDidMount()` is called when react renders on the DOM for the **first** time.

```javascript
componentDidMount() {
    // code executes when component rendered on DOM
}
```

### Properties

##### _Passed down from parent components and always contain `props.children`, children are between the brackets <><>_

This component is a class and only concerned with state

```javascript
render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
```

This component is a function and only concerned with the card list

```javascript
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
```

This component is a function and only concerned with the card

```javascript
export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
```

## Important Javascript Functions Inside React

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

Promises are a way to run asynchronous code, _or code that depends on a response from one event before it can execute the next set of instructions, we are not sure when or if it will complete._ `.then` is used when a promise is resolved and can keep being chained together to continue resolve and returning what information you need from an object much like our _callback hell_ can return information from an object

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

_`fetch()` returns a promise value, therefore we can get a `.then` that is `{pending}` followed by another `.then` that is the resolved function_

#### ES7 introduces Async Await

_Asynchronous code is when we don't know when it will complete, async await allows us to declare a function asynchronous and store the responses in variables after they return their resolve/response. If there is an error it can be caught using a try/catch block much like we use `.catch` in promises_

```javascript
const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch("api-call/users");
    const users = await usersResponse.json();
    const firstUser = users[0];

    console.log(firstUser);

    const postsResponse = await fetch("api-call/posts?userID=" + firstUser.id);
    const posts = await postsResponse.json();

    console.log(posts);
  } catch (err) {
    console.log("there was an error");
  }
};
```
