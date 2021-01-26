const express = require('express')
const { getHello } = require('../controllers/helloworld')

const router = express.Router()

router
    .route('/')
    .get(getHello)

module.exports = router;