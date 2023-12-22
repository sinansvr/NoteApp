"use strict"

const {mongoose} = require("../configs/dbConnection")

const NoteSchema = new mongoose.Schema({
    
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
},{collection:"notes", timestamps:true})

module.exports= mongoose.model("Note",NoteSchema)