"use strict";

//express
const express= require("express")
const app=express()

//.env 
require("dotenv").config();
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;

//async-errors
require("express-async-errors")

//DB Connection
const {dbConnection} = require("./src/configs/dbConnection")
dbConnection()

//JSON data
app.use(express.json())

// CORS
app.use(require('cors')())

//Find/Pagination
app.use(require('./src/middlewares/findSearchSortPage'))

//Home Page
app.all("/",(req,res)=>{

    res.send({
        error:false,
        message:"Welcome to NoteApp API!",
        documents:"/docs/swagger"
    })

})

//Router
app.use(require("./src/routes"))

// Swagger
const swaggerUI=require("swagger-ui-express");
const swaggerJson=require("./src/configs/swagger.json")

app.use("/docs/swagger", swaggerUI.serve, swaggerUI.setup(swaggerJson))


//errorHandler
app.use(require("./src/middlewares/errorHandler"))

//Listening PORT
app.listen(PORT,()=>console.log(`Running at: http://${HOST}:${PORT}`))