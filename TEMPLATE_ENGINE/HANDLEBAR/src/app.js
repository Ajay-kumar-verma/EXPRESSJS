const express=require('express')
const app=express();
const router=express.Router();

const obj={url:"Http2ServerRequest",name:"ajay kumar verma"}

router.get("/index.hbs",(req,res)=>{
    res.render('index',obj)
})

router.get("/about.hbs",(req,res)=>{
    res.render('about',obj)
})


router.all("*",(req,res)=>{
    console.log(` this is url and method is not defined ${req.url}`);
})


module.exports=router