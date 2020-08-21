![react](../images/logo192.png)

# React Basics

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
