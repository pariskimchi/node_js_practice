// CORS 
// Cross-Origin Resource Sharing 
// http 헤더를 사용해서 도메인 또는 포트가 다른 서버의 자원에 
// 접근 할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제 

const express = require("express")
const cors = require("cors")

const app = express()

// cors option 
const corsOptions = {
    origin: 'http//example.com', //허용할 도메인 설정
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.get("/product/:id", function (req,res,next) {
    res.json({
        msg:"this is cors enabled for all origin"
    })
})

app.listen(3000, function() {
    console.log('CORS enabled web server');
})