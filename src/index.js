import express from 'express'
import Home from './containers/Home'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(express.static('public'))

const content = renderToString(<Home />)

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>react-ssr</title> 
      </head>
      <body>
        ${content}
        <script src='/index.js'></script>
      </body>
    </html> 
  `)
})

app.listen(8087, () => {
  console.log('server running at http://localhost:8087')
})
