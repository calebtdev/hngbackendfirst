const express = require('express');
const { getProfile } = require('../controller/profileController');

const router = express.Router();

router.get('/me', getProfile);

module.exports = router;
