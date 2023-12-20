const passport = require('../../passportStrategy')
const userDao = require('../../db/masterUser/userDao');

const facebookAuthLogin = async (req, res) => {
  // console.log('reqqqq:--->', req);
  const result = await passport.authenticate('facebook', { scope: ['email', 'user_friends'] })(req, res);
  return result;
}
const facebookCallback = async (req, res) => {
  console.log('reqqqq22222:--->', req.user);
  return await passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000/auth/facebook-auth/login' })(req, res, async () => {
    // If the user is not found, create a new user in the database
    const email = req.user.emails[0].value;
    console.log('email:--->', email);
    let user = await userDao.getUserByEmail(email);
    console.log('user:--->', user);
    if (!user) {
      await userDao.createUser({
        first_name: req.user.name.givenName,
        last_name: req.user.name.familyName,
        email,
        phone: '7709272141',
        oauth_id: req.user.id,
        oauth_provider: req.user.provider
      });
    }
    // return res.status(201)
  });
}

module.exports = { facebookAuthLogin, facebookCallback }