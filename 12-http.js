const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('welcome to our homepage!')
   }
   else if(req.url === '/about'){
    res.end('Here is about page!')
   }
   else(
   res.end(`
   <h1>Oops!</h1>
   <p>please navigate to homepage!</p>
   <a href="/">back Home</a>
   `)
   )

})

server.listen(5000)