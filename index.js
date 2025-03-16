const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>This is the updated heading!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
