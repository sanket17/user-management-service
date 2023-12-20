const passport = require('passport');
const facebookAuthenticationStrategy = require('./facebookStrategy');
const googleAuthenticationStrategy = require('./googleStrategy');

passport.use(googleAuthenticationStrategy);
passport.use(facebookAuthenticationStrategy);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
