//Install express server
const compression = require('compression');
const express = require('express');
const path = require('path');
//const csp = require('express-csp-header');

const app = express();

//Gzip
app.use(compression())

// app.use(csp({
//   policies: {
//       'default-src': [csp.NONE],
//       'img-src': [csp.SELF],
//   }
// }));

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

app.use(expressCspHeader({
    policies: {
        'default-src': [NONE],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': [SELF],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/index.html'));

// res.header('Content-Security-Policy', 'img-src 'self'');




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
