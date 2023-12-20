"use strict"

const {mongoose} = require("../configs/dbConnection")

const CategorySchema = new mongoose.Schema({
    
    title: {
        type: String,
        trim:true,
        required: true,
       
    },
    description:{
        type: String,
        trim:true,
        required: true,
    }
},{collection:"tutorials", timestamps:true})

module.exports= mongoose.model("Tutorial",CategorySchema)