const passport = require('passport');

module.exports = (app) => {

    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }   
    )
    );

    // 'google' starts the GoogleStrategy
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout(); // takes the cookie in the user id and destroys the id of the user

        res.send(req.user); // to prove that the user is no longer signed in
    });

    // for future reference if we are building our application and expanding it, people should be able to use our API and check out which users are currently logged in in our application
    // req - incoming request, res - outgoing response
    app.get('/api/current_user', (req, res) => { 
        res.send(req.user); // tests if someone that already have gone through the OAuth flow and logged into the app can now have access to it
    });
};

