/**
 * Created by CXQ on 2018/3/16.
 */
 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/Daoway')
 mongoose.connection.on('open',function () {
   console.log('数据库已连接')
 })