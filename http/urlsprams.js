const { url } = require('inspector');

try{
const http  =   require('http');
const url =require('url');
http.createServer((req,res)=>{
 let ulr1 = url.parse(req.url,true);
//  console.log(ulr1);
 console.log('pathname -- '+ulr1.pathname);
//  console.log('query -- '+ulr1.query);
 console.log('search -- '+ulr1.search);
 console.log('host -- '+ulr1.host);
 console.log('port -- '+ulr1.port);
 res.end("Byeee");

}).listen(3007);

}catch(e){
    console.log(e);
}