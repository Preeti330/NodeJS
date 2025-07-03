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
    res.write("Hey");//write function is used to send some data before the completly sends the response , can be used for live scores data 
    setTimeout(()=>{console.log("wait for meee")}, 1000);
    res.write("beautiful");
    res.write("<br>ho <br>");
    res.end("..!!!");
    });
    server.listen(3004,()=>{
        console.log("server is running on 8080");
    });

    /*
    const server2 = http.createServer((req,res)=>{
        res.write("Hey");
        res.write("world");
        res.end("...!!")
    }).listen("4000");
    */
}catch(e){
console.log(e);
}