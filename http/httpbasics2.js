try{
const http = require('http');
http.createServer((req,res)=>{
    res.write("10");
    //write function is used to send some data before the completly sends the response , can be used for live scores data 
    setTimeout(()=>{console.log("wait for meee")}, 1000);
    res.write("20");
    res.writeHead('200',{
         'Content-Type': 'text/html',
        'X-Powered-By': 'Node.js',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Set-Cookie': 'sessionid=abc123; HttpOnly',
        'Access-Control-Allow-Origin':'*'
    });
  res.end("Thats alll");

}).listen(3000);

}catch(e){
    console.log(e);
}