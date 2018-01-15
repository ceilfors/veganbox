const { json, send } = require('micro')
const { router, get, del, post, options } = require('microrouter')

let db = require('./data/veganFood')

const saveFood = async (req, res) => {
  const body = await json(req)
  db = db.concat(body)
  return 'Food saved'
}

const listFood = (req, res) => {
  send(res, 200, db)
}

const notfound = (req, res) =>
  send(res, 404, 'Not found route')

const optionsFn = (req, res) => {
  send(res, 200)
}

const deleteFn = (req, res) => {
  db = db.filter(food => food.name !== decodeURIComponent(req.params.name))
  send(res, 200, {message: "success"})
}

const cors = fn => (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
  fn(req, res)
}

module.exports = router(
  get('/food', cors(listFood)),
  post('/food', cors(saveFood)),
  get('/*', notfound),
  options('/*', cors(optionsFn)),
  del('/food/:name', cors(deleteFn))
)
