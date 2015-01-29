/**
 * Logs in, queries project and project owner details by project id
 */

var ApiFactory = require('./../../').ApiFactory;
var util = require('util');

var instance = ApiFactory.getInstance({
	url: 'http://localhost:8080',
	version: '4.0'
});

util.print('Logs in, queries project and project owner details by project id\n');
util.log('Logging in ...');
instance.login('new@user.attask', 'user').then(
	function(data) {
		util.log('Getting project and owner details by project id ...');
		instance.get('proj', '5461f8e3000006d43674695aff4cdf52', ['*', 'owner:*']).then(
			function(data) {
				util.log('Get success. Received data:');
				console.log(util.inspect(data, {colors:true}));
			},
			function(error) {
				util.log('Get failure. Received data:');
				console.log(util.inspect(error, {colors:true}));
			}
		);
	},
	function(error) {
		util.log('Login failure. Received data:');
		console.log(util.inspect(error, {colors:true}));
	}
);