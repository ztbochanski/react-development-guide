# taggart-burberry

> -an exploratory client application built to reinforce react fundamentals on the premise of a boujee canine boutique :dog2::smiley:

## React Router

#### `npm install react-router-dom`

**BrowserRouter** HTML5 history API, keep UI in sync with URL

**Route** Renders some UI when path matches current URL
props:

- match
- history
- location

**Switch** Exclusively renders a route, so similar paths wont also be rendered, rendering occurs in the same spot so transitions work well with Switch.

**withRouter** Higher Order Component where you can access the history object's properties in a Component that does not have a Route

```javascript
export default withRouter(ComponentName); // returns the history props to the passed in component
```

**history**

- location.path
- push
- goBack
- etc

### Reselect

Your file should be named: `<redux_module_folder_name>.selectors.js`

- a library that helps create memoized selector functions from redux store object
- https://redux.js.org/recipes/computing-derived-data

#### input selectors

- grab or select a slice of state

### Session Storage and Persistence

- Redux Persist `npm install redux-persist`
- In the Redux store file import `{ persistStore }` which allows us to chache the store object into the browsers local storage
