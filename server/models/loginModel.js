const mongoose = require('mongoose')

const Schema = mongoose.Schema

const loginSchema = new Schema({
    username : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required:true
    },
    password : {
        type: String,
        required:true}
    // },
    // phone : {
    //     type: Number,
    //     required:false
    // },
    // noc :{
    //     type: Number,
    //     required:false
    // },
    // coininvested:{
    //     type:  Number ,
    //     required:false
    // }
},{timestamps:true})

module.exports = mongoose.model('login_detail', loginSchema)