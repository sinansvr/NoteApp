"use strict"

const router = require('express').Router()

const category = require('../controllers/tutorial')

// URL: /tutorials

router.route('/')
    .get(tutorial.list)
    .post(tutorial.create)

router.route('/:id')
    .get( tutorial.read)
    .put( tutorial.update)
    .patch( tutorial.update)
    .delete( tutorial.delete)


module.exports = router