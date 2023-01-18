const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({
    origin: '*'
}));

app.post("/login",function(req,res){
    console.log("yaaaay");
    console.log(res);
    console.log(req);
    return res.send('pong');
})
app.listen(process.env.PORT || 8080);