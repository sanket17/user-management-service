const express = require('express');
const router = express.Router();

const googleAuth = require('./googleAuth/googleAuth.controller');
const facebookAuth = require('./facebookAuth/facebookAuth.controller');

router.use('/google-auth', googleAuth);
router.use('/facebook-auth', facebookAuth);

module.exports = router;