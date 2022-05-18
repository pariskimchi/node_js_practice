const express = require("express");
const router = express.Router();
// const app = express.Router();

// product read with get
// product/  
router.get("/", function(req,res) {
    res.send("product // index router")
})

// product add with post 
// product/insert
router.post("/insert",function(req,res) {
    res.send("/product // insert router")
})

// product update with put
// product/update 
router.put("/update",function(req,res) {
    res.send("/product // update router")
})

// product delete with delete 
// product/delete 
router.delete("/delete",function(req,res) {
    res.send("/product/delete router")
})

// module export 
module.exports = router;