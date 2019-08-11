const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('LCC web shop')
})

app.listen(8000, () => {
  console.log('Express listening on port 8000 for LCC web shop app!')
})
