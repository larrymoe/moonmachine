// const Movies = require('../../models/movies');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const oAuth = require('oauth'); 
const controller = {};

controller.index = (req, res) => {
	res.render('login');
	getToken();	
}

function getToken(){

	// https://stackoverflow.com/questions/31473420/make-an-http-post-authentication-basic-request-using-javascript
	
	let clientId = "qDkYWpySZ_CVQg";
	let clientSecret = "c1TLPySO2h-PwDuiiYXcFhI4h1c";

	let authorizationBasic = Buffer.from(clientId + ':' + clientSecret).toString('base64');

	let request = new XMLHttpRequest();
	request.open('POST', 'https://www.reddit.com/api/v1/access_token', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.setRequestHeader('Authorization', 'Basic ' + authorizationBasic);
	request.setRequestHeader('Accept', 'application/json');
	request.send('grant_type=client_credentials');

	request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	       console.log(request.responseText);
	    }
	};
}

module.exports = controller;