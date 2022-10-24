const http = require('http');

const server = http.createServer((req,res)=>{
 if(req.url === '/'){
    res.end('Welcome to my homepage')
 }   
 if(req.url === '/about'){
    res.end('This is my about page')
 }
    
 res.end(`
    <h1>Oops</h1>
    <p>We cannot find the page you are looking for</p>
    <a href = '/'>back home</a>
 `)
    
})

server.listen(5002)