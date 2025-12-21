const http = require('http');
const fs = require('fs');
http.createServer((req,res) =>{
    if(req.url === '/'){
         fs.readFile('index.html','utf8',(err,data)=>{
        if(err){
            res.writeHead(501,{'content-type' : 'text/plain'});
            res.end("Server not found");
        }
        else{
            res.writeHead(501,{'content-type' : 'text/html'});
            res.end(data);
        }
    })
    };
}).listen(2000)
console.log("Server is running at http://localhost:2000/");