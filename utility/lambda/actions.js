const api = require('../api')

const host = "http://paint.lambdanalytique.com:7868/"

document.getElementById('btnSettingLogin').addEventListener('click', () => {

	let name = document.getElementById('filedUsername').value;
	let pw = document.getElementById('fieldPassword').value;

	login(name, pw);
})

async function login(name, pw) {
	const action = await api.requestPost(host + 'login', { username: name, password: pw });
	document.getElementById('labelLogin').value = action.value;
}

module.exports = {
	login,
}
