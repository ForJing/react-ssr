import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux'

export const render = req => {
  const reducer = (state = { name: 'dearest' }, action) => {
    return state
  }

  const store = createStore(reducer)

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
        <title>react-ssr</title> 
      </head>
      <body>
        <div id="root">${content}</div>
        <script src='/index.js'></script>
      </body>
    </html> 
  `
}
