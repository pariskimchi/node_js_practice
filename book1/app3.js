const express = require('express');
const app = express();


// server port 3000 
app.listen(3000, () => {
    console.log(`server started.port 3000`);
})

// // 3000/customer 호출 
// app.get("/customer",function(req,res) {
//     res.send("get request response");
// })

// // post, 
// app.post("/customer",function(req,res){
//     res.send("post request response");
// })

// app.all("/customer",function(req, res) {
//     res.send("http 요청 메서드 종류 상관없이 응답")
// })


// 라우트 경로 
//
app.get('/', function(req, res) {
    res.send("root");
})

// get 
app.get("/about",function(req,res) {
    res.send("about")
})
// post 
app.post("/customer",function(req,res) {
    res.send("customer")
})

// 
//  b+ => b가 1개 이상 있다는 의미 
//  ab*cd => ab와 cd사이에 문자가 없거나 어떤 문자도 올 수 있다는 의미
//  {cd} => 문자 cd가 0번 혹은 1번 있을 수 있음을 의미

// 'a'가 포함되어 있을 경우
// app.get(/a/, function(req,res) {
//     res.send('/a/');
// })

//insert로 시작하는 경우
//  ex) insertCustomer, insertProduct 

// app.get(/^insert/ , function(req,res) {
//     res.send('/^insert/');
// })


// Route handler 

// next() =>  다음 콜백 함수 호출 

// // example
// app.get('/example',function(req,res, next) {
//     console.log('first callback');
//     next();
// }, function(req,res) {
//     res.send('second callback');
// })

// // set callback function 
// const ex0 = function(req,res,next) {
//     console.log('first callback');
//     next();
// }

// const ex1 = function(req,res,next) {
//     console.log("second callback");
//     next();
// }

// const ex2 = function(req,res) {
//     res.send("third callback")
// }

// // router, with 3 callback
// app.get("/example",[ex0, ex1, ex2])

// response method
// res.download() => download 
// res.end() 응답 프로세스 종료 
// res.json() json 응답 전송 
// res.jsonp()
// res.redirect() => 경로 재지정 
// res.render() => render view template 
// res.send() => response transfer
// res.sendFile() => transfer file with streaming 
// res.sendStatus() => status code on body and transfer

// app.route 

app.route("/customer")
    .get(function(req,res) {
        res.send("customer page ")
    })
    .post(function(req,res) {
        res.send("customer add")
    })
    .put(function(req,res) {
        res.send("customer updage")
    })
    .delete(function(req,res) {
        res.send("customer delete")
    })

//  express.router 

// 여러개의 파일로 분리해서 각각 용도에 맞게 구현해서 사용 가능 
// rotue