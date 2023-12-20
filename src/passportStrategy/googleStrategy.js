const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = new GoogleStrategy(
  {
    clientID: '235661291126-7l4bgp6q5aprk0r8vprclue2uj953oj0.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google-auth/google/callback',
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/user.phonenumbers.read']
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
)
