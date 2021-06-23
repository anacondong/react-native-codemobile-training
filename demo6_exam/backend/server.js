const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.json({result: 'ok'});
});

app.post('/auth', function(request, response) {
  response.json({user:{username:"admin",email:"admin@gmail.com",role:"admin and God"}});
});

app.listen(3000, () => {
  console.log('server is runing!!');
});
