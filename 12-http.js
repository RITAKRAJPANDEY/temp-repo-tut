const http = require('http');

// the servercallback function there are two functions which are objects which are by convention 
// request>> req   and  response>>res


const server=http.createServer((req,res)=>{
    if(req.url === '/'){
       res.end('Welcome To Our Home page\n') 
    }
     else if(req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for </p>
        <a href="/">back home</a>` 
    )

})
server.listen(5000)
