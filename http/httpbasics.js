//http is module which helps js files to run on local server as like xamps provide the local server for php
//http is built in module for node which runs over the TCP/SSL 
//which is having createServer which helps to create the server 

let http;
console.log("hii")
try{
    http= require('http');  // import the http 
   const server =  http.createServer((req,res)=>{
        console.log("http url : "+req.url);
        console.log("headers : "+req.headers);
        
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("HII");
    })
    server.listen(3000,()=>{
        console.log("server is running on 8080");
    })
}catch(e){
console.log(e);
}