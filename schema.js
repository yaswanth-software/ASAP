const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,required:true
    },
    password:{
        type:string,required:true
    },
    email:{
        type:string,required:true
    },
    address:{
        type:string,required:true
    },
    title:{
        type:String,unique:true,minLength:5
    },
    content:{
        type:String,require:true,minLength:50
    },
    authour:{
        type:String
    },
    tags:{
        type:String
    },
    category:{
        type:String,default:'General'
    },
    likes:{
        type:String,default:[]
    }
    
})

const user = mongoose.model('user',userSchema)