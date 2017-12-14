//import statements "common js modules" used on server-side
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys  = require('./config/keys');
require('./models/User'); //models/User must be imported before services/passport.js since User is being 
require('./services/passport.js'); //referenced inside of services/passport.js

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //milliseconds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Tricky require statement returns a function, immediately call the function with app as paramater
//This then attaches the route handlers from authRoutes to the app express object
require('./routes/authRoutes')(app);

//Dynamically bind port to Heroku environment variable, otherwise use 5000
const PORT = process.env.PORT || 5000 
app.listen(PORT);