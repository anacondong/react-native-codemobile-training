const express = require('express');
const app = express();
const formidable = require('formidable');
const fs = require('fs-extra');

app.get('/', (req, res) => {
  res.json({result: 'ok'});
});

app.post('/uploads', (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    var newname = Date.now();
    var oldpath = files.userfile.path;
    var newpath =
      __dirname +
      '/upload/' +
      newname.toString() +
      '.' +
      files.userfile.name.split('.').pop();

    fs.move(oldpath, newpath, function (err) {
      res.json({result: 'Upload Successfully', account: fields});
    });
  });
});

app.listen(3000, () => {
  console.log('server is runing!!');
});
