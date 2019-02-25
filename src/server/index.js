import express from 'express'
import { render } from './utils'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(8087, () => {
  console.log('server running at http://localhost:8087')
})
