//Install express server
const compression = require('compression');
const express = require('express');
const path = require('path');

const app = express();

//Gzip
app.use(compression())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/index.html'));

// res.header('Content-Security-Policy', 'img-src 'self'');

const csp = require('express-csp-header');
app.use(csp({
    policies: {
        'default-src': [csp.NONE],
        'img-src': [csp.SELF],
    }
}));

// app.get('*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

app.use(express.static(path.join(__dirname, '/dist/')));

app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname+'/dist/index.html')
  );
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


// "build": "ng build --watch --configuration production ",
