const express = require('express')
const app=express();


// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//   })


// all requests redirect to app only 
// use is used for re directing traffic 
app.use(require('./app'));

app.listen(3000,_ =>console.log(`server is running ${3000}`))



