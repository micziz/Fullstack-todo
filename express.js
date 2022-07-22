const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./app/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./app/about.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})