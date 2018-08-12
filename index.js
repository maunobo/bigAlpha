// Javascript modules, 'require' - gain access to express library
const express = require('express'); // express is required in our express app
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // first declare the model and then require the passport, in any other case it leads to an error
require('./services/passport'); 
// original format
// const passportConfig = require('./services/passport');

mongoose.connect(keys.mongoURI);  //****** THE DATABASE HAS TO BE REBUILD ******

// Running Express app, all Route Handlers are registed with that 'app' object
const app = express();



app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, // how long can this cookie exist in the browser before it expires, Days * Hours * Minutes * Seconds * Miliseconds
      keys: [keys.cookieKey] // allows for an array of keys and not only one, thus giving more security for assiging a different Key to every generated cookie
  })  
);
// calls to make passport aware that it needs to use Cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// original format
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);

// callback function
// https://accounts.google.com/o/oauth2/v2/auth?
// response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=23376650779-ekh1cdfqh71di9eoq2ci4djdqgc6lhm0.apps.googleusercontent.com

// NOT EXACTLY WHEN THIS CHANGED - edit 20:30 Sunday
// // Route Handler
// const handler = (req, res) => {
//     // fetch from db, send... etc
    
//     // npm start - redirects on localhost:3000 on the browser - this text appears
//     res.send({ hello: 'handsome, just checking out if this works!!!!' });
// }
// const route = '/'
// app.get(route,handler);


// A port that should not be changed, Heroku will listen to this port
// The eviornment variables are given her, which are environment variables of the runtime the node is running on
// Look at the enviornment and see if there is a port set to use
const PORT = process.env.PORT || 5000;
// If there is an enviornment variable already defined by Heroku, assign the var to PORT
// If not listen to the localhost port 3000

// Port to listen to, listen to incoming traffic to the port 3000
app.listen(PORT);

// BOOM: http://localhost:3000/


// Check Check Check