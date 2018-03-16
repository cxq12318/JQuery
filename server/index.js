/**
 * Created by CXQ on 2018/3/16.
 */
 require('../todos/db')
 const shopList = require('../modules/shop')
 const providerList = require('../modules/provider')
 var express = require('express')
 var app = express()
 app.use(express.static('public'))

 app.get('/shoplist',function (req,res) {
   shopList.find({},function (err,list) {
    res.send({list:list})
   })
 })
 app.get('/providerlist',function (req,res) {
   providerList.find({},function (err,list) {
     res.send({list:list})
   })
 })
 app.listen(3000)