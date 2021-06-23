var express = require('express')
var app = express()

var formidable = require('formidable');
var path = require('path');
var fs = require("fs-extra");
app.use(express.static('upload'));


app.get('', (req, res)=>{
    res.end("Welcome to CodeMobiles ReactNative")
})

app.get('/home', (req, res)=>{
    res.end("Coming Home")
})


app.post('/uploads/', function (req, res) {
    console.log("Upload File");

    try {
        var form = new formidable.IncomingForm();
        var newname = Date.now();
        form.parse(req, function (err, fields, files) {

            console.log(JSON.stringify(files));
            var oldpath = files.userfile.path;
            var newpath = path.join(__dirname, "./upload/" + newname.toString() + "." + files.userfile.name.split('.').pop());
            
            fs.move(oldpath, newpath, function (err) {
                if (err) throw err;

              var username = fields.username;
              var password =fields.password;
              console.log("username: " + username);
              console.log("password: " + password);
              res.json({result: "Upload Successfully"});

            });            
        });
    } catch (err) {
        console.log("err : " + err);
    }
});

app.listen(3000, ()=>{
    console.log('running...')
})

// node server.js