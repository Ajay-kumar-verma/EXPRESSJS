const express = require('express')
const router = express.Router()

const name="USER"; 

router.get("/",(req,res)=>{
    res.send(`${name} ${req.url}Get `);
})


router.post("/",(req,res)=>{
    res.send(`${name} ${req.url} POST` );
})


router.put("/",(req,res)=>{
      res.send(`${name} ${req.url} Put`);
})

router.delete("/",(req,res)=>{
    res.send(`${name} ${req.url} Delete`);
})


module.exports=router;