var express = require('express')
var app = express()

const foods = require('../data/veganFood')

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// /search?food=bla
app.get('/search', (request, response) => {
  const foodName = request.query.food

  let food = foods.filter(food => food.name.toLowerCase() == foodName.toLowerCase())[0]

  if(food) {
    response.send(food.isVegan)
  } else {
    response.status(404).send('Not found')
  }
})

app.listen(process.env.PORT || 8080)

module.exports = app // for testing
