const express=require('express');
const app=express();

const router =express.Router();



router.get("*",(req,res)=>{
  const obj=` THis IS APP ${req.url}`
  res.send(obj) 
  console.log(obj);

})


module.exports=router;





