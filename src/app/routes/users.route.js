const express = require('express');
const app = express();
const usersRoutes = express.Router();

// Require Business model in our routes module
let usersmodel = require('../models/users');

// Defined store route
usersRoutes.route('/register').post(function(req, res) {
	let user = new users(req.body);
	user
		.save()
		.then((user) => {
			res.status(200).json({ user: 'user is added successfully' });
		})
		.catch((err) => {
			res.status(400).send('unable to save to database');
		});
});

usersRoutes.route('/registeredusers').get(function(req, res) {
	usersmodel.find(function(err, userslist) {
		if (err) {
			console.log(err);
		} else {
			res.json(userslist);
		}
	});
});

module.exports = usersRoutes;
