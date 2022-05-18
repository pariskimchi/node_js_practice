//  session-file-store => 세션 파일로 저장 

const express = require("express")
const session = require("express-session")
const fileStore = require("session-file-store")(session);
const app = express();


app.use(session({
    secret:'secret key',
    resave:false, 
    saveUninitialized:true,
    cookie :{
        httpOnly: true,
        secure:true, 
        maxAge:60000
    },
    store: new fileStore() // 세션 저장소 fileStore 사용
}))
// 실행하면 sessions 폴더 생성 되고 폴더 안에 세션데이터 저장된 파일 생성

// server open=> port:3000
app.listen(3000, () => {
    console.log("port 3000");
})


// 저장된 세션 정보는 req.session 으로 접근 가능
app.get('/',(req,res,next) => {
    console.log(req.session);
    res.send(req.session);
})


// 로그인 요청시 사용자 정보 확인 후 세션에 사용자 정보 저장
app.post('/login', (req,res,next) => {
    const {email, pw} = req.body.param;

    // 데이터베이스의 사용자 테이블에서 로그인 인증 처리 코드 작성 
    // 사용자가 존재하면 ( 로그인 처리가 성공하면)
    req.session.email = email;
    req.session.is_logined = true; 
    req.session.save(err => { // 세션 저장
        if (err) throw err;
        res.redirect('/home') // 로그인 후 홈 화면으로 redirect
    })

})

// 로그아웃 하면 세션 삭제 
// 세션 삭제는 destory()함수 사용 
app.post("/logout", (req,res,next) => {
    req.session.destroy(); // destory() 함수를 사용하여 세션 삭제 
    res.redirect('/login') // 로그인 페이지로 이동
})

// CORS 
// Cross-Origin Resource Sharing 
// http 헤더를 사용해서 도메인 또는 포트가 다른 서버의 자원에 
// 접근 할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제 

// // const express = require("express")
// const cors = require("cors")

// // const app = express()

// // cors option 
// const corsOptions = {
//     origin: 'http//example.com', //허용할 도메인 설정
//     optionsSuccessStatus:200
// }

// app.use(cors(corsOptions))