const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json({ result: 'ok' });
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  console.log('req', req.body);
  let username = req.body.username;
  let password = req.body.password;
  if (username === "admin" && password === "admin") {
    res.json({ user: { username: "admin", email: "admin@gmail.com", role: "admin and God" } });
  } else {
    res.json({ user: null });
  }

});

app.listen(3000, () => {
  console.log('server is runing!!');
});
