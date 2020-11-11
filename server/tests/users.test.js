const request = require('supertest')
const app = require('../app.js')
const { sequelize } = require('../models')

describe.only('User Controller', () => {
    describe('Get All User', () => {
        test('Should return 200', async (done) => {
            try {
                
                const users = await request(app).get('/users')
                const { body, status} = users
                expect(status).toBe(200)
                
                expect(Array.isArray(body)).toBeTruthy();
                expect(body[0]).toHaveProperty('username')
                expect(body[0]).toHaveProperty('email')
                done()
            } catch (err) {
                done(err)
            }
        })
    })
    describe('Register User', () => {
        describe('Registered user', () => {
            test('Should return 201', async (done) => {
                try {
                    const createUser = {
                        username: 'admin cms',
                        email: 'admin@email.com',
                        password: 'admincms'
                    }
                    const registeredUser = await request(app).post('/users/register').send(createUser)

                    const { body, status} = registeredUser
                    expect(status).toBe(201)
                    done()
                } catch (err) {
                    done(err)
                }
            })
        })
    })
})