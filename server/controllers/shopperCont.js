const { Shoper } = require('../models');
const { tokenGenerator } = require('../helpers/jwt');
const bcrypt = require('bcrypt')
// const { OAuth2Client } = require('google-auth-library');


class ShoperCont {

    static register(req, res, next) {
        const { name, email, password, address, phone } = req.body
        console.log(req.body, '====>');
        Shoper.create({ name, email, password, address, phone })
            .then((data) => {
                let access_token = tokenGenerator(data)
                console.log('access_token: ', access_token);
                res.status(201).json({
                    access_token,
                    username: data.name
                })
            }).catch((err) => {
                console.log('err: ', err.name);
                if (err.name === "SequelizeValidationError") {
                    next({ name: "ERROR_VALIDATION" })
                } else if (err.name === "SequelizeUniqueConstraintError") {
                    next({ name: "ERROR_VALIDATION" })
                } else {
                    next({ name: 'ERROR_SERVER' })
                }
            });
    }

    static login(req, res, next) {
        const { email, password } = req.body
        Shoper.findOne({
            where: {
                email: email
            }
        })
            .then((data) => {
                console.log('data: ', data);
                if (!data) {
                    next({ name: "DATA_NOT_FOUND" })
                }

                if (!bcrypt.compareSync(password, data.password)) {
                    next({ name: "ERROR_LOGIN" })
                } else {
                    let access_token = tokenGenerator(data)
                    console.log('access_token: ', access_token);
                    res.status(200).json({
                        access_token,
                        userid: data.id,
                        username: data.name
                    })
                }
            }).catch((err) => {
                next({ name: 'ERROR_SERVER' })
                console.log(err)
            });
    }

    static loginGoogle(req, res, next) {
        let CLIENT_ID = process.env.CLIENT_ID
        let token = req.body.idToken
        let userName = null
        let userEmail = null
        const client = new OAuth2Client(CLIENT_ID);
        // console.log('client: ', client);

        client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        })
            .then((ticket) => {
                const payload = ticket.getPayload();
                // console.log('payload: ', payload);
                userEmail = payload.email;
                userName = payload.name
                console.log('userEmail: ', userEmail);
                return Shoper.findOne({
                    where: {
                        email: userEmail
                    }
                })
            })
            .then((data) => {
                // console.log('data: ', data);
                if (data) {
                    console.log('data: ', data);
                    let access_token = Jwt.generateToken(data)
                    res.status(200).json({
                        access_token,
                        username: data.username
                    })
                    return
                } else {
                    let newUser = {
                        name: userName,
                        email: userEmail,
                        password: process.env.PASSWORD_GOOGLE
                    }
                    // console.log('newUser: ', newUser);
                    return Shoper.create(newUser)
                }
            })
            .then((data) => {
                let access_token = Jwt.generateToken(data)
                res.status(200).json({
                    access_token,
                    username: data.username
                })
                return
            }).catch((err) => {
                next({ name: 'ERROR_SERVER' })
            });
    }
}

module.exports = {
    ShoperCont
};
