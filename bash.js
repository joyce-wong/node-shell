// import { cwd } from 'node:process';
// process.stdout.write('prompt > ');
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();
    
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write(process.cwd());
//     process.stdout.write('\nprompt > ');
// })

// process.stdout.write('prompt > ');
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();
    
    
//     process.stdout.write('You typed: ' + cmd);
//     if(cmd === 'pwd'){
//         process.stdout.write(process.cwd());
//     }
//     process.stdout.write('\nprompt > ');
// })

const pwd = require('./pwd');
pwd();
const ls = require('./ls');
ls();
const cat = require('./cat')
cat();
