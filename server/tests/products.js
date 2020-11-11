const request = require('supertest')
const app = require('../app.js')
const { sequelize } = require('../models')
// const { queryInterface } = sequelize

// afterAll(done => {
//     queryInterface
//         .bulkDelete('Products', null, {})
//         .then(() => done())
//         .catch(err => done(err))
// })
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJKYWNrIiwiaWF0IjoxNjA0NTkzMDgzfQ.pfHO3sXOr3lNYeCcyImvmkGSFPv69N35DbyS1nJabE0'

describe('Product Controllers', () => {
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
    // describe('Create Product Data', () => {
    //     test('Should return created product and status = 201', done => {
    //         const product = {
    //             name: "Belajar Testing",
    //             info: "Info Testing",
    //             category: "Category Testing",
    //             price: 500000,
    //             stock: 3,
    //         }
    //         const fileName = `${__dirname}/testFiles/test.jpg`
    //         request(app)
    //             .post('/products')
    //             .set('access_token', access_token)
    //             .attach({
    //                 image : fileName
    //             })
    //             // .send(product)
    //             .then(response => {
    //                 const { body, status } = response

    //                 expect(status).toBe(201)
    //                 done()
    //             })
    //             .catch(err => {
    //                 done(err)
    //             })
    //     })
    // })
})