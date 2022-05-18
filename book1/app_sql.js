const express = require('express');
const mysql = require('./mysql')

const app = express();

app.listen(3000, () => {
    console.log('server started port 3000');
})

app.get('/api/customers',async (req,res) => {
    // localhost:3000/customer 접속시 실행
    const customers = await mysql.query('customerList');
    
    console.log(customers);

    res.send(customers)
})