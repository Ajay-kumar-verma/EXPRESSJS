const express = require('express')
const app=express();
const path = require('path')

// console.log(path)

// app.use() is used for redirecting the traffic
app.use("/app/web",express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public')))

// if file does not exist in that folder then 
// it execute 
app.use(require("./app"))

app.listen(3000,_=>console.log("server is running at port 3000"));
