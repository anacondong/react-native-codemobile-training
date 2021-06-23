const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const formidable = require("formidable");
const fs = require("fs-extra");

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.end("Home")
})


app.post('/uploads/', function (req, res) {
    console.log("Upload File");

    try {
        var form = new formidable.IncomingForm();
        
        form.parse(req, (err, fields, files)=> {

            var newname = Date.now();            
            var oldpath = files.userfile.path;
            var newpath = __dirname + "/upload/" + newname.toString() + "." + files.userfile.name.split('.').pop();
            
            fs.move(oldpath, newpath, function (err) {                              
              res.json({result: "Upload Successfully", account: fields});

            });            
        });
    } catch (err) {
        console.log("err : " + err);
    }
});



// {"username":"admin", "password":"1234"}
// http://localhost:3000/register?username=admin&password=1234
app.get("/register", (req, res)=>{
    const{username, password} = req.query
    res.json({username, password})
})

app.post("/register", (req, res)=>{
    const{username, password} = req.body
    res.json({username, password})
})


app.listen(3000, ()=>{
    console.log("Running..")
})