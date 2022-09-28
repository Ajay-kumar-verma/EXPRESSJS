const exp=require("express");
const app=exp();



app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

  app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })

//  Route path
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })

  app.get(/a/, (req, res) => {
    res.send('/a/')
  })




// Route parameters

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }


//    : treated as a variable for getting data from url 

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })



// above we knew how to give route or provide route 

// Below  Route handlers
app.get('/example/c', [cb0, cb1, cb2])


// Response methods

// res.download()	Prompt a file to be downloaded.
// res.end()	End the response process.
// res.json()	Send a JSON response.
// res.jsonp()	Send a JSON response with JSONP support.
// res.redirect()	Redirect a request.
// res.render()	Render a view template.
// res.send()	Send a response of various types.
// res.sendFile()	Send a file as an octet stream.
// res.sendStatus()



// app.route()

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })



  
app.listen(3000,_=>console.log("server is running at 3000"));