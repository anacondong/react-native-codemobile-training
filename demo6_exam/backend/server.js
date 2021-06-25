const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware

const userList = [
  { username: "admin", password: "admin" }
]

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json({ result: 'ok' });
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  console.log('req', req.body);
  let username = req.body.username;
  let password = req.body.password;
  let isAuth = false;
  for (const u of userList) {
    if (username === u.username && password === u.password) {
      res.json({ user: { username: username, email: username + "@gmail.com", role: "admin and God" } });
    }
  }
  res.json({ msg: "Login Failed" });
});


app.post('/register', (req, res) => {
  console.log('req', req.body);
  const user = { username: req.body.username, password: req.body.password };
  userList.push(user);
  res.json({ msg: "Registered: " + user.username });
});

app.listen(3000, () => {
  console.log('server is runing!!');
});
