// Importing required libraries
const cron = require("node-cron");
const express = require("express");
  
app = express(); // Initializing app
  
// Creating a cron job which runs on every 10 second
const task1=cron.schedule("* * * * * *", function() {
    console.log("running a task1 every 1 second");
});

const task2=cron.schedule("* * * * * *", function() {
    console.log("running a task2 every 1 second");
});


setTimeout(()=>{
    task1.stop();
},4000)



setTimeout(()=>{
    task2.stop();
},10000)


// setTimeout(()=>{
//     task.stop();  
// },5000)


// setTimeout(()=>{
//     task.start();  
// },7000)


app.listen(4000);