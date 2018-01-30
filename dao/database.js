var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/maoyan';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
});