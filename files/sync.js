try{

    //in node js we handel the file in two ways aysnc and sync 
    //synchoruns file handling is nothing but it wait untill the complteion of extuctaion of file it may be read or write
    //to handel the files in synchoruns way node js have , readFileSync and writeFileSync
    const fs = require('fs'); // this opertae with files 
    const path = require('path'); // this module which helps to get the complete path 
    const dir_path = __dirname;
    const filepath = path.join('/',dir_path,'sync.text');
      
    console.log(filepath);
    // fs.writeFileSync(filepath,"Hey read mee ...!!!"); // create a file name sync.text  and if file is already in found its deletes and create a new file 
 
    let readdata = fs.readFileSync(filepath,'utf8'); // read the file in sync way and its takes two parms one as file path and other the charecter strem like utf8,binray how you want to read
    console.log(readdata);
    /*
    fs.appendFileSync(filepath,data,options); 
    filepath - path of file 
    data - data you want to add 
    options - which includes ->
                encoding - how do you want to add the file liek utf8
                mode - 
                flag - default value is a 
    */

    fs.appendFileSync(filepath,"I am the next ");

    let read2 = fs.readFileSync(filepath,"utf8");
    console.log(read2);

    fs.appendFileSync(filepath,"I am the nect to next ",{
        encoding:"utf8",flag:"a"
    });

    let read3 = fs.readFileSync(filepath,"utf8");
    console.log(read3);
    const srcfile = path.join(dir_path,"copyme.txt");

    /*
    fs.copyFileSync(scource,dest,mode)
    scource - from where to copy 
    dest - to which file to copy 
    mode - fs.constants.COPYFILE_EXCL - > throws error if file already exits 
            fs.constants.COPYFILE_FICLONE -> if the platfrom doesnot support for the reflink then this will get fail 

    */
   fs.copyFileSync(filepath,srcfile);

   /*
   fs.renameSync(oldpath,newpath); 
   fs.renameSync('text.txt','newtext.txt'); this just rename the file , 
   fs.renameSync('text.txt','/https/newtext.txt'); this rename the file and movies into new directory 
    fs.renameSync('text.txt','/https/text.txt'); this is just moves a file into new directory 
    once this files moves into new dir than you wont be seeing this again in the same dir
    */






}catch(e){
    console.log(e)
}