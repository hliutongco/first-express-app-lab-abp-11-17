var express = require('express')
var app = express()

app.get("/",function(rep,resp){
  resp.send("Hello, WORLD!")
})

module.exports = app
