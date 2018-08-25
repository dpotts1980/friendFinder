var friendObject = require('../data/friends.js');
var path = require('path');

//==============================================
//ROUTING
//==============================================

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendObject);
	});

	app.post('/api/friends', function(req, res){
		friendObject.push(req.body);
	})
};
