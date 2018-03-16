const mongoose = require('mongoose')
const providerSchema = new mongoose.Schema({
  title:{type:String,unique:true},
  orderCount:{type:Number,unique:true},
  positiveRate:{type:String,unique:true},
  imgUrl:{type:String,unique:true},
},{
  collection:'providers'
})

module.exports = mongoose.model('provider',providerSchema)