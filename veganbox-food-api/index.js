const { json, send } = require('micro')
const { router, get, post } = require('microrouter')

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
 
module.exports = router(
  get('/food', listFood),
  post('/food', saveFood),
  get('/*', notfound)
)
