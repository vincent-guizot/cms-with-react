const { Banner,User } = require('../models')

class BannerCOntroller {
    static allList(req,res){
        //Menerima dr middleware
        Banner.findAll()
        .then(Banner => {
            res.status(200).json(Banner)
        })
        .catch(err => {
            next(err)
        })
    }
    static list(req,res,next){
        //Menerima dr middleware
        // const getId = req.userData.id
        Banner.findAll({
            include : [
                User
            ],
        })
        .then(Banner => {
            res.status(200).json(Banner)
        })
        .catch(err => {
            next(err)
        })
    }
    static find(req,res,next){
        let getProductId = req.params.id
        const getId = req.userData.id
        
        Banner.findAll({
            where : {
                id : getProductId,
                UserId: getId
            }
        })
        .then(Banner => {
            if(!Banner ){
                next({
                    name : "Not_Found"
                })
            }else{
                res.status(200).json(Banner)
            }
        })
        .catch(err => {
            next(err)
            res.status(500).json(err)
        })
    }
    static add(req,res,next){
        let form = req.body
        let userId = req.userData.id
        
        Banner.create({
            name : form.name,
            image_url : form.image_url,
            status : 'Available',
            UserId : userId
        })
        .then(Banner => {
            res.status(201).json(Banner)
        })
        .catch(err => {
            next(err)
        })
    }
    static update(req,res,next){
        let getId = req.params.id
        let form = req.body
        Banner.update({
            name : form.name,
            image_url : form.image_url,
            status : form.status,
        },{
            where : {
                id : getId
            }
        })
        .then(Banner => {
             if(!Banner ){
                next({
                    name : "Not_Found"
                })
            }else{
                res.status(200).json(Banner)
            }
            res.status(201).json(Banner)
        })
        .catch(err => {
            next(err)
        })
    }
    static delete(req,res,next){
        let getId =  req.params.id
        Banner.destroy({
            where : {
                id : getId
            }
        })
        .then(Banner =>{
             if(!Banner ){
                next({
                    name : "Not_Found"
                })
            }else{
                res.status(200).json(Banner)
            }
            res.status(200).json(Banner)   
        })
        .catch(err =>{
            next(err)
        })
    }
}




module.exports = BannerCOntroller

/**
 * HTTP Status Code
 * 200 : Ok
 * 201 : Created
 * 400 : Bad Request
 * 401 : Not Authorized
 * 403 : Forbidden
 * 404 : Not Found
 * 500 : Internal Server Error
 * 
 */