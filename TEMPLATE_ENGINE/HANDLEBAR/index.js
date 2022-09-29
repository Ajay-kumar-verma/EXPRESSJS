const express = require('express')
const app = express();
const path = require('path');
const hbs=require('hbs');
// is is for setting template engine type 
// and views folder should be is same level { default propertt }
app.set('view engine', `hbs`);
// app.set("views",path.join(__dirname,"./template"))
// const partials=path.join(__dirname,'./template.partials');

// hbs.registerPartial(partials)


const obj={url:"Http2ServerRequest",name:"ajay kumar verma"}

app.get("/index.hbs",(req,res)=>{
    res.render('index',obj)
})

app.get("/about.hbs",(req,res)=>{
    res.render('about',obj)
})



app.use(require('./src/app.js'))

app.listen(3000, _ => console.log("server is running at port 3000"))