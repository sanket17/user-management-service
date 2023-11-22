const userDao = require('../../db/masterUser/userDao');

const facebookAuthLogin = async (req, res) => {
  const result = await passport.authenticate('facebook', { scope: ['profile', 'email'] })(req, res);
  return result;
}
const facebookCallback = async (req, res) => {
  return await passport.authenticate('facebook', { failureRedirect: res.status(400) })(req, res, async () => {
    // If the user is not found, create a new user in the database
    const email = req.user.email;
    let user = await userModel.getUserByEmail(email);

    if (!user) {
      user = await userDao.createUser({
        username: req.user.displayName,
        email: req.user.email,
        oauth_id: req.user.id,
        oauth_provider: 'facebook',
      });
    }
    return res.status(201)
  });
}

module.exports = { facebookAuthLogin, facebookCallback }