// Javascript modules, 'require' - gain access to express library
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

// Running Express app, all Route Handlers are registed with that 'app' object
const app = express();

// Route Handler
const handler = (req, res) => {
    // fetch from db, send... etc
    
    res.send({ hello: 'handsome, just checking out if this works!' });
}


const route = '/'


app.get(route,handler);


// A port that should not be changed, Heroku will listen to this port
// The eviornment variables are given her, which are environment variables of the runtime the node is running on
// Look at the enviornment and see if there is a port set to use
const PORT = process.env.PORT || 3000;
// If there is an enviornment variable already defined by Heroku, assign the var to PORT
// If not listen to the localhost port 3000

// Port to listen to, listen to incoming traffic to the port 3000
app.listen(PORT);

// BOOM: http://localhost:3000/


// Check Check Check