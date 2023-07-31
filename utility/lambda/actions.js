const api = require('../api')

const host = "http://paint.lambdanalytique.com:7868/"

async function login(name, pw) {
	const action = await api.requestPost(host + 'login', {
		body: {
			username: name,
			password: pw
		}});
	const value = JSON.stringify(action);
	return String(value);
}

module.exports = {
	login,
}
