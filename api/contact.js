let nodemailer = require('nodemailer');
const express = require('express');
const creds = require('./config');

const app = express();
const router = express.Router();

let transport = {
	host: 'stmp.gmail.com',
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is up and running');
	}
});

router.post('/send', (req, res, next) => {
	let name = req.body.name;
	let email = req.body.email;
	let message = req.body.message;
	let content = `name: ${name} \n email: ${email} \n message: ${message}`;

	let mail = {
		from: name,
		to: 'crossy1686@gmail.com',
		subject: 'New message from website',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				msg: 'fail',
			});
		} else {
			res.json({
				msg: 'success',
			});
		}
	});
});
