const Route = require('express').Router()
const BannerControl = require('../controllers/Banner')

const { authentication, authorization } = require('../middlewares/authBanner')

// Route.get('/all',  BannerControl.allList)
Route.get('/',  BannerControl.list)
Route.get('/:id', authentication ,BannerControl.find)
Route.post('/', authentication ,BannerControl.add)
Route.put('/:id', authentication, authorization, BannerControl.update)
Route.delete('/:id', authentication, authorization, BannerControl.delete)


module.exports = Route