// express 

const express = require("express")
// create app 
const app = express()

// set port 
const port = 3000; 

// client 에서 http request => 'host:port" router 

//  router
app.get("/",(req,res)=> {
    res.send("hello world!")
})

// app.listen() => 서버 실행 
//  클라이언트는 "host:port"로 서버에 요청 보낼수 있다 

app.listen(port, ()=> {
    console.log(`start server. http://localhost:${port}`);
})

// router

// app.METHOD(PATH, HANDLER)
//  1. app => express instance 
//  2. METHOD => http 요청 메서드 
// 3. PATH 
// HANDLER => router 일치할떄 실행되는 함수 

