const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let users = new Schema(
	{
		first_name: {
			type: String
		},
		last_name: {
			type: String
		},
		user_name: {
			type: String
		},
		password: {
			type: String
		}
	},
	{
		collection: 'users'
	}
);

module.exports = mongoose.model('Users', users);
