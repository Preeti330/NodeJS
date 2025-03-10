// async funstions are handdel using promise 
// promises are used to handel the async funtions , which takes respose an reject on sucess return reponse and on fail return reject 
// promises have three state 1.pending - where promise is begain 
//2.fullfiled() - promise are completely excuted and returns response
//3.Rejected: The state when the operation fails and returns an error.
// and promises once they come to pending state either it should be goes to fullfiled or rejected state
//promises uses than - call back to intiates it 

const { error } = require("console");
const fs = require('fs').promises;

// create promises
const pro = new Promise((resolve,reject)=>{
    let sucess = false;
    if(sucess){
        resolve("sucess")
    }else{
        reject("error");
    }
});

pro.then(response=>{
                console.log(response);
            }).catch(error=>{
                console.log(error)
        });

fs.readFile('filename').then((response)=>{
    console.log(response);
}).catch(error=>{
    console.log(error)
})

// Error: ENOENT: no such file or directory, open 'filename'
//     at async open (node:internal/fs/promises:639:25)
//     at async Object.readFile (node:internal/fs/promises:1242:14) {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'filename'
// }