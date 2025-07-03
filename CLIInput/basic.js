// recive input from command line and clear it when they enter for next time.

console.log(process.argv);

//process.argv -> gives the input that typed in command lines 
//ex : 
/* node basic.js preeti
[
  '/usr/local/share/nvm/versions/node/v22.16.0/bin/node', // node installed file path 
  '/workspaces/NodeJS/CLIInput/basic.js', // curent excution of file 
  'preeti'  // input 
];
*/

/* 
    node basic.js preeti
    [
    '/usr/local/share/nvm/versions/node/v22.16.0/bin/node',
    '/workspaces/NodeJS/CLIInput/basic.js',
    'preeti'
    ]
*/

/* 
    console.log(process.argv[1]); // reads the data on base of index 
*/