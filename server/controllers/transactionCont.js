const { Transaction, Product } = require('../models');

class TransactionCont {
    static findAll(req, res, next) {
        Transaction.findAll({
            include: [Product],
            order: [['id', 'ASC']],
            where: {
                ShoperId: req.userId
            }
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

    static findByPk(req, res, next) {
        Transaction.findByPk(req.params.id)
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
        let newTransaction = {
            ShoperId: req.userId,
            ProductId: req.body.ProductId,
            delivery: req.body.delivery,
            items: req.body.items,
            price: req.body.price,
        }
        console.log('newTransaction: ', newTransaction);
        Transaction.create(newTransaction)
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

    static update(req, res, next) {
        let updateTransaction = {
            ShoperId: req.userId,
            ProductId: req.body.ProductId,
            delivery: req.body.delivery,
            items: req.body.items,
            price: req.body.price,
        }
        // console.log('updateTransaction: ', updateTransaction);
        console.log("id : ",req.params.id);
        Transaction.update(updateTransaction, {
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            console.log('data: ', data);
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

    static destroy(req, res, next) {
        Transaction.destroy({
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
    TransactionCont
};

