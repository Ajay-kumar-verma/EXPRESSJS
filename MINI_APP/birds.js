const express = require('express')
const router = express.Router()

const name="BIRDS"; 

router.get("/",(req,res,next)=>{
    console.log(`${name} ${req.url}Get `)
    next();     
})


router.post("/",(req,res)=>{
    const msg=`${name} ${req.url} POST`;
    res.send(msg);
    console.log(msg)
})


router.put("/",(req,res)=>{
    const msg=`${name} ${req.url} Put`; 
    res.send(msg);
      console.log(msg)
})

router.delete("/",(req,res)=>{
   const msg=`${name} ${req.url} Delete`;
    res.send(msg);
    console.log(msg);
})

router.all("*",(req,res)=>{
    const obj=`THIS IS BIRDS \n${name} URL ${req.url} METHOD ${req.method} \nNot defined yet `
      console.log(obj);
      res.send(obj);
  })
  

module.exports=router;