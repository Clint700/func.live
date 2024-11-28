const express = require('express');
const { base64Encode, getDocs } = require('./controller');

const router = express.Router();

router.post('/base64Encode', base64Encode);
router.get('/base64Encode', getDocs); 

module.exports = router;