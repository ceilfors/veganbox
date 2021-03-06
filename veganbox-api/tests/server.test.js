let server = require('../src/server');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let nock = require('nock')

describe('Foods', () => {

  beforeEach(() => {
    nock('http://localhost:3001')
      .get('/food')
      .reply(200, JSON.stringify([
        {
          "name": "frazzles",
          "isVegan": false
        },
        {
          "name": "oreos",
          "isVegan": true
        },
        {
          "name": "ritz crackers",
          "isVegan": true
        },
        {
          "name": "nature valley crunchy granola bars",
          "isVegan": true
        }
      ]
      ));
  })

  describe('GET /search with food that is in json file', () => {
    it('it should return 200', (done) => {
      chai.request(server)
          .get('/search')
          .query({food: 'frazzles'})
          .end((err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('boolean')
            done()
          })
    })

    it('it should return true if food is vegan', (done) => {
      chai.request(server)
          .get('/search')
          .query({food: 'oreos'})
          .end((err, res) => {
            res.body.should.equal(true)
            done()
          })
    })

    it('it should return false if food is not vegan', (done) => {
      chai.request(server)
          .get('/search')
          .query({food: 'frazzles'})
          .end((err, res) => {
            res.body.should.equal(false)
            done()
          })
    })
  })

  describe('GET /search with food that is not in json file', () => {
    it('it should return 404', (done) => {
      chai.request(server)
          .get('/search')
          .query({food: 'bla'})
          .end((err, res) => {
              res.should.have.status(404)
            done()
          })
    })
  })
})
