const express = require('express')
const router = express.Router()

const name="ANIMALS"; 

router.get("/",(req,res)=>{
    res.send(`${name} ${req.url}Get `);
console.log(`${name} ${req.url}Get `)
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
    const obj=`${name} URL ${req.url} METHOD ${req.method} \nNot defined yet `
      console.log(obj);
      res.send(obj);
  })
  

module.exports=router;