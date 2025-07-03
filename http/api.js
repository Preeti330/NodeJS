try{
    //run this with nodemon - which installed globally 
    const http = require('http');
    const data = require('./data.js');//import data from data.js 
    http.createServer((req,res)=>{
        res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
        res.write(JSON.stringify(data));
        console.log(data);
        res.end();
    }).listen(3000,()=>{
        console.log('Server running at http://localhost:3000');
    });
}catch(E){
    console.log(E);
}