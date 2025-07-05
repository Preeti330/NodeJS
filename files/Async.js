//Asncy file handling in node js -> here its read the file but does not wait untill its complete its excution 
// to read and write the file which takes three parms as filename,how you are reading encoding format and callback function 
// once its excutes the completion of file then its passes to call back function

try{
    const fs = require('fs');
    const path=require('path');
    const dir_path = __dirname;
    const filename = path.join(dir_path,'async.txt');

    /*
    fs.writeFile(filename,"Hey writing into async filee.....!!",(err)=>{
        if(!err){
            console.log(err);
        }else{
            console.log(err)
        }
    });
    */

    //read file 
    fs.readFile(filename,'utf8',(err,res)=>{
        if(!err){
            console.log(res);
        }
    });
    //append text 
    fs.appendFile(filename,'--and again hiii ',(err)=>{
        console.log(err);
    });
    fs.readFile(filename,'utf8',(err,res)=>{
        if(!err){
            console.log(res);
        }
    });

    const dest_file=path.join(dir_path,'copyasync.txt');

    fs.copyFile(filename,dest_file,(err)=>{
        if(!err){
            console.log(err);
        }
    });
}catch(e){
    console.log(e);
}