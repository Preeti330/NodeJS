//here create the files by taking the inputs and delete that file if the commands gives 
//here i am taking the repeatdly asking the user to enter command i.e  building a CLI tool (ask repeatedly until exit);
// for this it uses module readline - which helps to read the cmd line in live 
//https://www.geeksforgeeks.org/node-js-readline-module/ 

try {
    const readline = require('readline');
    const fs = require('fs');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }); // createInterface cretaes an interface for input and output 
    rl.question(`Do You Want To Create A File ??(Type yes/no )`,(input) => {
        if (input.toLowerCase().trim() == 'yes' || input.toLowerCase().trim() == 'y') {
            rl.question(`Please Enter the file name : `, (filename) => {
                if (filename.length != 0) {
                    fs.writeFileSync(filename, "");
                    console.log(`File "${filename}" created.`);
                    rl.question("Do you want to continue ??(type yes/no)", (answer) => {
                        if (answer.toLowerCase().trim() == 'yes' || answer.toLowerCase().trim() == 'y') {
                            rl.question('please enter the input for your file', (text) => {
                                if (text != '') {
                                    fs.writeFile(filename, text,(err)=>{
                                        if(err){
                                            console.log(err);
                                        }
                                    });
                                    console.log('copied the text');
                                    rl.question("Do you want to continue??(type y/n) ", (answer) => {
                                        if (answer.toLowerCase().trim() == 'yes' || answer.toLowerCase().trim() == 'y') {
                                            rl.question("Do you wana delete the file ??(type yes or no )",(answer)=>{
                                                if (answer.toLowerCase().trim() == 'yes' || answer.toLowerCase().trim() == 'y') {
                                                    fs.unlinkSync(filename);
                                                    console.log("Filename is deleted ....!!!!");     
                                                }else{
                                                    console.log("thank You,Program has been eneded ");   
                                                }
                                            });
                                        }else{
                                            console.log("thank You,Program has been eneded ");
                                        }
                                    })
                                }
                            });
                        }
                    });
                }
            });
        } else if (input == 'No' || input == 'no' || input == 'n') {
            rl.close();
        }

    });//on is for event listner 
    
} catch (E) {
    console.log(E);
}
