# REACT and REACT-DOM Libraries

> The react library helps us create html elements using functions and classes

- react is an api that communicates between your application and the intended platform

- react dom is a library for react to communicate with the DOM for the web
- react native is a library for react to communicate with mobile apps
- react 360 is for 3D
- ... etc

### Exploring react's top level API

Creating an element in javascript using the react library, JSX simply makes this process easier

```javascript
React.createElement("html tag", {html attributes & react properties},  children )
```

Rendering 'App' class to the DOM using the DOM library

```javascript
ReactDOM.render(React.createElement(App), document.getElementById("root"));
```
