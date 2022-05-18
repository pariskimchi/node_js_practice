const mysql = require('mysql');
const sql = require('./sql.js');

//  pool 생성 

const pool = mysql.createPool({
    connectionLimit:10, 
    host: '127.0.0.1',
    port:3006, 
    user:'root',
    password: '1234',
    database: 'test1'
});

// 쿼리문 실행 결과 + 결과 반환 함수 

// Pool 이 생성되면 Pool 의 내장 함수인 
//  query(queryString, values, callback)  을 사용해서 쿼리 실행
// queryString=> 쿼리문
// values => 쿼리문으로 전달할 데이터 배열
// callback => 콜백 함수로 쿼리 결과 전달


const query = async(alias, values) => {
    return new Promise((resolve, reject) => pool.query(sql[alias],values,(error,results)=> {
        if (error) {
            console.log(error);
            reject({
                error
            });
        } else resolve(results); // 결과 반환
    }));
}

module.exports = {
    query
};
