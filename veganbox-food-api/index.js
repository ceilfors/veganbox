const { json, send } = require('micro')
const { router, get, post, options } = require('microrouter')

let db = require('./data/veganFood')

const saveFood = async (req, res) => {
  const body = await json(req)
  db = db.concat(body)
  return 'Food saved'
}

const listFood = (req, res) => {
  return db
}

const notfound = (req, res) =>
  send(res, 404, 'Not found route')

const optionsFn = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  send(res, 200)
}

module.exports = router(
  get('/food', listFood),
  post('/food', saveFood),
  get('/*', notfound),
  options('/*', optionsFn)
)
