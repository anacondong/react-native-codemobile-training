const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = express("cors")
app.use(cors)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', require('./api.js'));



const server = app.listen(8082, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Running ... http://localhost%s', host, port);
})

