const request = require('supertest')
const app = require('../app.js')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

afterAll(done => {
    queryInterface
        .bulkDelete('Products', null, {})
        .then(() => done())
        .catch(err => done(err))
})

describe('Testing Product', () => {
    describe('Get Product Data', () => {
        test('Should return array of product and status = 200', done => {
            request(app)
                .get('/products')
                // .set('access_token', access_token)
                .then(response => {
                    const { body, status } = response
                    expect(status).toBe(200)
                    done()
                })
                .catch(err => {
                    done(err)
                })
        })
    })
})