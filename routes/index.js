var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')

/* GET home page. */
//Assigned handler function to index.js
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);

module.exports = router;
