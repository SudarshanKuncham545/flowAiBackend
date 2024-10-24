const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default : Date.now
    }
})
module.exports = mongoose.model('Student', TransactionSchema)
