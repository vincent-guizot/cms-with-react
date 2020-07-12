const route = require('express').Router()
const TaskRoute = require('./product')
const UserRoute = require('./user')
const BannerRoute = require('./banner')
const ShoperRoute = require('./shoper')

// route.get('/', (req,res)=>{
//     res.send("HOME")
// })
route.use('/product', TaskRoute)
route.use('/user', UserRoute)
route.use('/banner', BannerRoute)
route.use('/shopers', ShoperRoute);

module.exports = route