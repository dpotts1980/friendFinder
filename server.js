
// Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.text());
//app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routing
//=============================================================

require(path.join(__dirname, './app/routing/apiRoutes.js'))(app); 
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
  