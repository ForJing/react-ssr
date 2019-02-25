import express from 'express'
import Home from './containers/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

const content = renderToString(<Home />)

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>react-ssr</title> 
      </head>
      <body>
        ${content}
      </body>
    </html> 
  `)
})

app.listen(8087, () => {
  console.log('server running at http://localhost:8087')
})
