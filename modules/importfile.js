const importdata = require('./export.js'); 
// ./ tells that look this file in the defined dir or it will look the file in node.js
// import all the functions
// const username,displayName = require('./export.js'); 
console.log(importdata.username);
console.log(importdata.displayName("Pretti Reddy"));

