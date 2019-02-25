import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

var isBrowser = new Function(
  'try {return this===window;}catch(e){ return false;}'
)

const reducer = (state = { name: 'dearest' }, action) => {
  return state
}

let store
if (isBrowser()) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
  store = createStore(reducer, enhancer)
} else {
  store = createStore(reducer)
}

export default store
