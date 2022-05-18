const express = require("express");
const router = express.Router();

//  customer read 

router.get("/",function(req,res) {
    res.send("customer router ")
})

// customer add 
// customer/insert 

router.get("/insert",function(req,res) {
    res.send("customer / insert router")
})

//  customer update 
// customer/update 
router.put("/update",function(req,res) {
    res.send("customer // update router")
})

// customer delete 
// customer/delete 
router.delete("/delete",function(req,res) {
    res.send("/customer // delete router")
})

// 모듈 사용화
module.exports = router;