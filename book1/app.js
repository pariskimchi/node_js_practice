const express = require('express')

const app = express();

app.get('/', function(req,res) {
    res.send('hello world')
})

app.get('/about',function(req,res) {
    res.send('about')
})

// json 사용
app.use(express.json({
    limit:'50mb'
}));

// post customer 
app.post('/customer',function(req,res) {
    console.log(req.body.param);
    res.send(req.body.param);
})

app.listen(3000)