// import { cwd } from 'node:process';
// process.stdout.write('prompt > ');
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();
    
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write(process.cwd());
//     process.stdout.write('\nprompt > ');
// })

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const entry = data.toString().trim();
    const [cmd, arg] = entry.split(' ');
    
    //process.stdout.write('You typed: ' + cmd);
    if(cmd === 'pwd'){
      const pwd = require('./pwd');
      pwd();
    }
    if (cmd === 'ls') {
      const ls = require('./ls');
      ls();
    }
    if (cmd === 'cat') {
      const cat = require('./cat')
      cat(arg);
    }
    if (cmd === 'curl') {
      const curl = require('./curl');
      curl(arg);
    }
    process.stdout.write('\nprompt > ');
})

