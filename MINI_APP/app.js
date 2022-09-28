const express = require('express')
const app=express();
const router = express.Router()

// all request with index  redirect to animals only 
router.use("/animals",require('./animals'));
router.use("/birds",require('./birds'))

router.all("*",(req,res)=>{
  const obj=`THIS IS APP URL ${req.url} METHOD ${req.method} \nNot defined yet `
    console.log(obj);
    res.send(obj);
})



module.exports=router;

