// config/passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: '235661291126-7l4bgp6q5aprk0r8vprclue2uj953oj0.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google-auth/google/callback',
      // scope: ['profile', 'email']
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
