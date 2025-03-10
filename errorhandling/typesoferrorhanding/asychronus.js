//Aschychronous functions are wont wait the current line excutions
//Async functions excutes with blocking the code , 
//to handel this we use promises,callbacks 

//CALLBACK functions - callback is functions which  passed as argument to another 
// function and this will be wait untill the outer function finishes the excutions

//CALLBACK - as with event handeler
//  document.getElementById('idname').addEventListener('click',function(e){
//     console.log('add event listener funtions added the callback funtion');
//  });

// setTimeout(function(){
//     console.log("ooo");
// },1000);

// now error handling with call back function 
let errorHanddel = (error,data)=>{
    if(error){
      return   "bye";
    }
    return "hii";
}
console.log(errorHanddel(true,'whtas'));

console.log(errorHanddel(false,"datata"));

// handel the errors while calling an api using call back 

const fs  = require('fs');
function handdleReq(error,data){
  if(error){
    console.log(error); 
  }else{
    console.log(data);
  }
}
fs.open('filename',handdleReq);

// [Error: ENOENT: no such file or directory, open 'filename'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'filename'
// }




