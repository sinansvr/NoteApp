"use strict"

const router = require("express").Router()

//tutorial
router.use("/tutorials",require("./tutorial"))


module.exports= router;