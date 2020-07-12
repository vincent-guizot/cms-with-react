const { tokenVerifier } = require('../helpers/jwt');
const { Shoper, Transaction } = require('../models');
const secretKey = 'bebas'

class AuthShopers {
    static authentication(req, res, next) {
        const { access_token } = req.headers;
        console.log('access_token: authentication', access_token);
        try {
            let decoded = tokenVerifier(access_token,secretKey)
            console.log('decoded: ', decoded);
            const { id, email } = decoded;
            Shoper.findByPk(id)
                .then((result) => {
                    if (result) {
                        req.userId = id
                        next()
                    } else {
                        next({ name: 'DATA_NOT_FOUND' })
                    }
                }).catch((err) => {
                    next({ name: 'DATA_NOT_FOUND' })
                });
        } catch (err) {
            next({ name: 'ERROR_SERVER' })
        }
    }

    static authorization(req, res, next) {
        let { id } = req.params
        console.log('id: ', req.params);
        Transaction.findByPk(id)
            .then((data) => {
                console.log('data: ', data);
                if (data) {
                    if (data.UserId == req.userId) {
                        next()
                    } else {
                        next({ name: 'DATA_NOT_FOUND' })
                    }
                } else {
                    next({ name: 'DATA_NOT_FOUND' })
                }
            }).catch((err) => {
                next({ name: 'ERROR_SERVER' })
            });
    }
}

module.exports = {
    AuthShopers
};
