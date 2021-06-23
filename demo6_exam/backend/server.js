const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.json({result: 'ok'});
});

app.post('/auth', function(request, response) {
  console.log('auth');
	const username = request.body.username;
	const password = request.body.password;
	if (username === "admin" && password === "admin") {
		response.json({username:"admin",email:"admin@gmail.com",role:"admin and God"});
	} else {
		response.json({result: 'OMG That is wrong !!'});
	}
});

app.listen(3000, () => {
  console.log('server is runing!!');
});
