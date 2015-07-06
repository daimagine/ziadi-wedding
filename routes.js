var mongoose = require('mongoose');

var Message = mongoose.model('Message', mongoose.Schema({
	name: String,
	message: String,
    moderated: Boolean
}));

exports.index = function(req, res) {
	Message.find({ moderated: true }).lean().exec(function(err, messages) {
		if (err) {
			console.error(err);
		}
		console.log('messages', messages);
		res.render('index', { messages: messages });
	});
}

exports.message = function(req, res) {
	var message = {
		name: req.body.name,
		message: req.body.message,
        moderated: false
	};
	
	Message.create(message, function(err, message) {
		if (err) console.log(err);
		console.log('message data', message);
		res.redirect('/#rsvp');
	});
}
