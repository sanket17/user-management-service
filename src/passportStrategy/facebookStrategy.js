const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = new FacebookStrategy({
  clientID: '170294966169624',
  clientSecret: '32a21400545a8c44538cf15ea9b98165',
  callbackURL: 'http://localhost:3000/auth/facebook-auth/facebook/callback',
  profileFields: ['id', 'email', 'name'],
}, (accessToken, refreshToken, profile, done) => {
  console.log('profile:--->', profile);
  console.log('accessToken:--->', accessToken);
  return done(null, profile);
});
