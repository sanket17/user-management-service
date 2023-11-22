const express = require('express');
const router = express.Router();
const googleAuthService = require('../../services/googleAuth/googleAuth.service')

const login = async (req, res) => {
  const response = await googleAuthService.googleAuthLogin(req, res)
  return res.send(response);
}
const loginCallback = async (req, res) => {
  const response = await googleAuthService.googleCallback(req, res);
  return res.send(response);
}
router.get('/login', login);
router.get('/google/callback', loginCallback);

module.exports = router;
