
//  body-parser
//  요청 본문 구문 해석 => req.body 속성으로 사용 가능 하게 해줌 
// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({
//     extended:false
// }))

// app.use(express.json())

const express = require("express")
const app = express()

// json parsing 을 위한 body-parser
const jsonParser = express.json()

// urlencoded parsing을 위한 body-parser 
const urlencodedParser = express.urlencoded({
    extended: false
})

app.post('/login',urlencodedParser, function(req,res) {
    res.send("welcome," + req.body.username)
})

// /api/users 
app.post('/api/users', jsonParser, function(req,res) {
    
})