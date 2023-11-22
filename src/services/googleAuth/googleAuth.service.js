const passport = require('../../../passportConfig')
const userDao = require('../../db/masterUser/userDao');

const googleAuthLogin = async (req, res) => {
  const result = await passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
  return result;
}

const googleCallback = async (req, res) => {
  return await passport.authenticate('google', {
    successRedirect: res.status(200).send('hello'),//res.status added here to check on the browser
    // failureRedirect: res.status(400),//res.status added here to check on the browser
    failureFlash: true
  })(req, res, async () => {
    const email = req.user.emails[0].value;
    let user = await userDao.getUserByEmail(email);

    if (!user) {
      user = await userDao.createUser({
        first_name: req.user.name.givenName,
        last_name: req.user.name.familyName,
        email,
        oauth_id: req.user.id,
        oauth_provider: req.user.provider
      });
    }
    return res.status(201)
  });
}

module.exports = { googleAuthLogin, googleCallback }