var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
//Assigned handler function to index.js
router.get('/', index.index);

module.exports = router;
