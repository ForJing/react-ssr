import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'dearest' }, action) => {
  return state
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
