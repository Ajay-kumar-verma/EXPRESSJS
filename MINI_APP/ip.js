const express = require('express')
const router = express.Router()
var getIP = require('ipware')().get_ip;
  function ip(req, res, next) {
    var ipInfo = getIP(req);
    console.log(ipInfo);
     res.send(ipInfo)
    // { clientIp: '127.0.0.1', clientIpRoutable: false }
    // next();
};

router.all("*",ip)
  

module.exports=router;