const express = require('express');
const router = express.Router();
const facebookAuthService = require('../../services/facebookAuth/facebookAuth.service')

const login = async (req, res) => {
  const response = await facebookAuthService.facebookAuthLogin(req, res)
  return res.send(response);
}
const loginCallback = async (req, res) => {
  const response = await facebookAuthService.facebookCallback(req, res);
  return res.send(response);
}
router.get('/login', login);
router.get('/facebook/callback', loginCallback);

module.exports = router;
