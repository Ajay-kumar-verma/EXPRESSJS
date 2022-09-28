const express = require('express')
const app=express();


app.all("/",(req,res)=>{

  res.write("edrewkarlka");
  res.write("edrewkarlka");
  res.write("edrewkarlka");
  res.end("dsf")

})


app.all("/json",(req,res)=>{
    // we can send json data 
res.send([{
    id:1233,
    name:"ajay kumar  verma"
},{
    id:1233,
    name:"ajay kumar  verma"
}
])
 
})
  
  


app.listen(3000,_ =>console.log(`server is running ${3000}`))



