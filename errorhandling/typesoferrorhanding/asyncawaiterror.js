// await always used with promises 

const { rejects } = require("assert");

async function displayname(params) {
    await new Promise((resolve,rejects)=>{
        let sucess = 1;
        if(sucess){
            setTimeout(function(){
                console.log("heyy");
                resolve();
            },4000);
        }else{
            rejects("eror");
        }
    })
    console.log("Byyeeee");
}

displayname('pree');

