//Install express server
const compression = require('compression');
const express = require('express');
const path = require('path');

const app = express();

//Gzip
app.use(compression())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/seven-labs-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/seven-labs-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);