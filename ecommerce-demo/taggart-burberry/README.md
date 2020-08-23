# taggart-burberry

- react client

### Router

`#### npm install react-router-dom`

`{ BrowserRouter, Route, Switch, withRouter, }`

**BrowserRouter** HTML5 history API, keep UI in sync with URL

**Route**  Renders some UI when path matches current URL
props:
- match
- history
- location

**Switch** Exclusively renders a route, so similar paths wont also be rendered, rendering occurs in the same spot so transitions work well with Switch.

**withRouter** Higher Order Component where you can access the history object's properties in a Component that does not have a `<Route>`

**history**
- location.path
- push
- goBack
- etc