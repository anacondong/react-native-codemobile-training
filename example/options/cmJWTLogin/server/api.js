const express = require('express');
const app = express.Router();
const Account = require("./account_model")
const {sign, verify} = require('./jwt');


app.post('/register', async (req, res) => {
  console.log(req.body);  
  await Account.create(req.body)
  res.json({result: "ok"})  
});

app.post('/login', async (req, res) => {
  const{username, password} = req.body
  let result = await Account.findOne({where: {username: username, password: password}})
  console.log(JSON.stringify(result))
  let token = sign({username})
  res.json({result: "ok", token})
});


app.get('/feed', verify, (req, res) => {
  res.json({ result: "success" })
});

module.exports = app;