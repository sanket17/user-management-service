const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const KnexSessionStore = require('connect-session-knex')(session);
const passport = require('./passportConfig');
const userRoutes = require('./src/controllers/index')
const knex = require('./src/config/dbUtils')
require('dotenv').config()

const app = express();

app.use(
  session({
    store: new KnexSessionStore({
      knex,
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 60, // Cleanup expired sessions every hour
    }),
    secret: '177d11cf30e60b49059ce3f47b6132bd7d63808eace4a9644b89c57595eaa6d9',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Session expiration time, e.g., 1 day
    },
  })
)
const port = 3000;

app.use(bodyParser.json());
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
