//handeling the erros schyronouslly it involes try ctach block to handel the errors 

let total= 0 ;
try{
    for(let i =1;i<=10 ;i++){
        total = total + i;
    }
    console.log(total);
}catch(e){
    console.log(e.message);
    console.log(e.name);
}


