# React Basics

![react](../images/logo.png)

### Installation

`npx install create-react-app <your-app-name>`

_`npx` allows us to **not** install create-react-app package globally and just run this one command to install the dependencies locally and create our app_

### Environment

_`create-react-app` is a tool that allows for quick implementation of react. babel and webpack are used to convert react js into an older version that our current browsers can understand_

![under-the-hood](../images/babel-webpack.png)

### ReactDOM

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

## Class Component

```javascript
import React, { Component } from "react";
```

_class component has access to state_

- state = js object with properties you can access at anytime inside our class

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

- **NOT ALLOWED** to modify state in react unless using seState(), this enforces unidirectional data flow
