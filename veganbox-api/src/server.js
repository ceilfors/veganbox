var express = require('express')
var app = express()
let r2 = require('r2')

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// /search?food=bla
app.get('/search', async (request, response) => {
  const foodName = request.query.food

  const foods = await r2(`http://localhost:3001/food`).json

  let food = foods.filter(food => food.name.toLowerCase() == foodName.toLowerCase())[0]

  if(food) {
    response.send(food.isVegan)
  } else {
    response.status(404).send('Not found')
  }
})

app.listen(process.env.PORT || 8080)

module.exports = app // for testing
