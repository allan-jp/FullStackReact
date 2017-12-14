const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { //'google' argument is internally defined within GoogleStrategy object
      scope: ['profile', 'email']     //scope specifies to Google servers what info we need (also internally defined)
    })
  );
    
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  });  
};