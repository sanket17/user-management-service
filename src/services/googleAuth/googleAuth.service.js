const passport = require('../../passportStrategy')
const userDao = require('../../db/masterUser/userDao');

const googleAuthLogin = async (req, res) => {
  const result = await passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
  return result;
}

const googleCallback = async (req, res) => {
  await passport.authenticate('google', {
    failureRedirect: 'localhost:3000/auth/google-auth/login',//'localhost:3000/auth/google-auth/login',//res.status added here to check on the browser
    failureFlash: true
  })(req, res, async () => {
    // If the user is not found, create a new user in the database
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
    return user;
  });
}

module.exports = { googleAuthLogin, googleCallback }