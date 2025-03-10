//types of errors
//1.Eval errors - this error occurs when the global variable not found
//2.Syntax - errors - occurs when the syntax goes wrong 
//3.Reference errors - when we are accessing the variabled that is not defined 
//4.<TypeError> An error when an operation could not be performed.
//5.URI errors - regrading with URLS 

//Eval Errors
// eval() functions which used to evaluvate the operation when we even pass string 
// ex = let x= 10; console.log(eval('5+10'));  == 15
try{ 
    throw new EvalError("throw eval error");
}catch(e){
    console.log(e.message);
    console.log(e.name);
}

//syntax error 
try{
    console.log(syntax)
}catch(e){
    console.log(e.message);
    console.log(e.name);
}

//reference error 
 try{
    console.log(a);
 }catch(e){
    console.log(e.message);
    console.log(e.name);
 }

 //Range Error - indicates when valuve is not set in defined range 
 var list=[1,2,3];
 try{
    let im = list[-1];
    // console.log(im); // undefined
   let newa1 = new Array(-1);
 }catch(e){
    console.log(e.message);
    console.log(e.name);
 }

 // URI errros
 try{
    decodeURIComponent('%');
 }catch(e){
    console.log(e.message);
    console.log(e.name);
 }
