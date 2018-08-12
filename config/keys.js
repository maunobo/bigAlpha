// keys.js - figure out what set of credentials to return

if(process.env.NODE_ENV === 'production') { // whille on Heroku we will use this set of keys
    // PROD - we are in PRODUCTION - return the prod set of keys
    module.exports = require('./prod');
} else { // while on local machine we will use this set of keys
    // DEV - we are in DEVELOPMENT - return the dev keys
    module.exports = require('./dev');
}