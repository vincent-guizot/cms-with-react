const router = require('express').Router();
const { ShoperCont } = require('../controllers/shopperCont');
const { TransactionCont } = require('../controllers/transactionCont');
const { AuthShopers } = require('../middlewares/authShopers');
const { CheckoutCont } = require('../controllers/checkoutCont')

//router account customer
router.post('/register', ShoperCont.register)
router.post('/login', ShoperCont.login)
router.post('/login/google', ShoperCont.loginGoogle)

//route tansaction customer
router.use(AuthShopers.authentication)
router.get('/transaction', TransactionCont.findAll)
router.post('/transaction', TransactionCont.create)
router.get('/transaction/:id', TransactionCont.findByPk)
router.put('/transaction/:id', TransactionCont.update)
router.delete('/transaction/:id', TransactionCont.destroy)

router.get('/checkout', CheckoutCont.findAll)
router.post('/checkout', CheckoutCont.create)
router.delete('/checkout/:id', CheckoutCont.destroy)

module.exports = router
