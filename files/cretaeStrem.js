/*createReadStream() -- which helps to read the large file as chunk means its not needed to load the file at once
 and read at once so we can read the file chunck by chunck 
 uses : 
    1.Efficient Memory Usage - bcz its writes files in chunck 
    2.Ayscronus - perform async opertion so while writing into the file it can continue with exutions 
    3.Enable the data transfromations
creasteReadStream(file,options)-
 option == {
 'encoding':'utf8',(charecter encoding),
 'flag':'r',(string specify the system flag for the file r- read w-write)
 'start':5,(from where to start , start at postion 5 ),
 'end':64,(end at the char at 65),
 'highWaterMark':5(number of bytes to read for each check means size of charesters)
  }
*/

try{
    const fs = require('fs');
    const path = require('path');
    const dir_path= __dirname;
    const filename = path.join(dir_path,'async.txt');

    /*
    let reader = fs.createReadStream(filename,{
        encoding:'utf8',
        flags:'r',
        start:5,
        end:40,
        highWaterMark:6
    });

    reader.on('data',function(chunk){
        // console.log(chunk);
    })
    */

    var filesize = 0;
    //get the file length  and read till end 
    fs.stat(filename,(err,stats)=>{
        if(!err){
            filesize = stats.size;
        }
        console.log(filesize)
        fs.createReadStream(filename,{
            encoding:'utf8',
            flags:'r',
            start:5,
            end:filesize-1,
            highWaterMark:10
        }).on('data',function(data){
            console.log(data);
        });
    });
    

    /*
    // flage:'w' => write a new conetent ,a=> appneds the data to old content
    let write = fs.createWriteStream(filename,{
        flage:'w'
    });
    write.write("are you sure about me ??");
    */

}catch(e){
    console.log(e);
}