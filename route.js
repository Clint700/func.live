const express = require('express');
const { dnsLookup, getDocs } = require('./controller');

const router = express.Router();

router.post('/dnsLookup', dnsLookup); 
router.get('/dnsLookup', getDocs);   

module.exports = router;