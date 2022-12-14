const express = require('express')
const app=express();


// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//   })

app.use(require('./ip'))


app.get("/", function (req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send("your IP is: " + req.ip);
  });

// all requests redirect to app only 
// use is used for re directing traffic 

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
 app.use(requestTime)

 app.use(require('./app'));

app.listen(3000,_ =>console.log(`server is running ${3000}`))



