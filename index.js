// Javascript modules, 'require' - gain access to express library
const express = require('express');

// Running Express app, all Route Handlers are registed with that 'app' object
const app = express();

// Route Handler
app.get('/', (req, res) => {
    res.send({ hi: 'handsome' });
});


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