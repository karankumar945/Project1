const http = require('http');
http.createServer((req,res) =>{
    res.end("Everything fine")
}).listen(2000)
console.log("Server is running at http://localhost:2000/");