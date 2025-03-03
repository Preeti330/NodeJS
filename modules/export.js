const username = "Preeti";
function displayName(name){
    console.log(name);
}

//export individual
// exports.username = username;
// exports.displayName = displayName;

module.exports={
    username:username,
    displayName:displayName
}

