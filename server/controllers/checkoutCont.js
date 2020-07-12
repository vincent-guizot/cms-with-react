const { Checkout } = require('../models');

class CheckoutCont {
    static findAll(req, res, next) {
        console.log(req.userId);
        Checkout.findAll({
            order: [['id', 'ASC']],
            where: {
                ShoperId: req.userId
            },
        })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ name: 'DATA_NOT_FOUND' })
                }
            }).catch((err) => {
                next({ name: 'ERROR_SERVER' })
            });
    }

    static create(req, res, next) {
        let newCheckout = {
            ShoperId: req.userId,
            ProductId: req.body.ProductId,
            codeTransaction: req.body.codeTransaction,
            productName: req.body.productName,
            amount: req.body.amount,
            subtotal: req.body.subtotal,
            delivery: req.body.delivery,
            date: new Date(),
            status: 'unpaid'
        }
        Checkout.create(newCheckout)
        .then((data) => {
            console.log('data: ', data);
            res.status(201).json(data)
        }).catch((err) => {
            console.log('err: ', err);
            if (err.name === "SequelizeValidationError") {
                next({ name: 'ERROR_VALIDATION' })
            } else {
                next({ name: 'ERROR_SERVER' })
            }
        });
    }

    static destroy(req, res, next) {
        Checkout.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            if (data == 1) {
                res.status(200).json({ msg: 'Data successfully updated' })
            } else {
                next({ name: 'DATA_NOT_FOUND' })
            }

        }).catch((err) => {
            if (err.name === "SequelizeValidationError") {
                next({ name: 'ERROR_VALIDATION' })
            } else {
                next({ name: 'ERROR_SERVER' })
            }
        });
    }
}

module.exports = {
    CheckoutCont
};
