const express = require('express');
const { base64Encode, getDocs } = require('./controller');

const router = express.Router();

router.post('/base64EncodeCustom', base64Encode);
router.get('/base64EncodeCustom', getDocs); 

module.exports = router;