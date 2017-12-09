//index.js is a common "startup" file for a node project
//import statement "common js modules" used on server-side
const express = require('express');

//most projects will utilize a single express app object
const app = express(); 

//Dynamically bind port to Heroku environment variable, otherwise use 5000
const PORT = process.env.PORT || 5000

//route handler example
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});


app.listen(PORT);