var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send("Hello World! My name'art ")
})

app.listen(3000, function () {
  console.log('Listening on port 8000...')
})
