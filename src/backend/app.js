const express = require('express')
const cors = require('cors')
const { searchBooks } = require('./Service/bookService')
require('dotenv').config()

let app = express()

app.use(cors())

app.get('/search-books', async function (req, res) {
  try {
    console.log('req:', req.query)
    const { q, pageNo } = req.query
    let results = await searchBooks(q, pageNo)
    res.send(results)
  } catch (e) {
    console.error(e.message)
    res.status(500)
  }
})

app.get('/', async function (req, res) {
  console.log('request:', req)
  res.send('backend running...')
})

app.listen(3000, function () {
  console.log('App listens in 3000')
})
