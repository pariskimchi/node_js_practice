const express = require("express");
const customerRoute = require("./route/customer");
const productRoute = require("./route/product");

const app = express();

app.use(express.json({
    limit: '50mb' // max storage
})); 
//  클라이언트 요청 body를 json으로 parsing 

// server start 
app.listen(3000, () => {
    console.log('server started. port 3000')
})

// customer route 추가 
// 기본경로로 /customer 사용
app.use("/customer", customerRoute);
// product route 추가 
// 기본경로로 /product사용
app.use("/product",productRoute)


// // 에러 처리 
// app.get('/error',function(req,res) {
//     throw new Error("error created")
// })

// 그래서 보통 
// app.use("/error", function(err,req,res,next ) {
//     res.status(500).json({
//         statusCode:res.statusCode, 
//         errMessage:err.errMessage
//     })
// })

app.get("/error2", function(req, res, next) {
    next(new Error("에러 발생"));
})

// express static 
// css나 javascript 같은 정적 파일 제공을 위해서 
// must use => express.static

// public folder 
// app.use(express.static('public'));

app.use("/static",express.static("public"));


// middleware function?
// request 와 response 사이에서 목적에 맞는 특정 기능 하는 함수 

// body-parser => http request body를 해석 
// compression => http 요청 압축 
// connect-rid => 고유 요청 Id 생성 
// cookie-parser => 쿠키 헤더 파싱  req, cookies 에 할당 
// cors => 쿠키 기반 세션 생성 
// errorhanlder => 

