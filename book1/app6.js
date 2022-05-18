
//  compression => 압축 

const compression = require("compression")
const express = require("express")

const app = express()

app.use(compression()) // 응답 모든 데이터가 압축 

// 압축되면 데이터 크기는 줄어들지만, 반드시 좋은건 아님 
// 응답 속도가 느려지는 경우도 있음 

const cookieSession = require("cookie-session")
const express = require("express")

const app = express()

app.use(cookieSession({
    name:"session",
    keys: [],
    maxAge: 24*60*60*1000 // 24시간 유지
}))

// 세션 관리 
const express = require("express");
const session = require("express-session")
const app = express()

app.use(session({
    secret: 'secret key', // 암호화 할때 쓰이는 키 
    resave: false, // 세션 변경 사항이 없어도 항상 다시 저장할 지 여부
    saveUninitialized:true, // 초기화 되지 않은 세션을 스토어에 강제로 저장할 지 여부 
    cookie: { // 세션 쿠키 설정 
        httpOnly:true, // true이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보 볼 수 없음
        secure: true, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리
        maxAge: 60000 // 쿠키가 유지되는 시간
    }
}));

// session-file-store 
//  세션정보를 파일로 저장해서 관리