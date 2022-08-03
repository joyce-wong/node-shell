const fs = require('fs');

module.exports = function () {
    // pwd code
    // process.stdout.write('prompt > ');
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        
        // process.stdout.write('You typed: ' + cmd);
        if(cmd === 'ls'){
            fs.readdir('./', 'utf8', (err, files) => {
                if(err){
                    throw err
                } else {
                    process.stdout.write(files.join('\n'))
                    process.stdout.write("\nprompt > ");
                }
            })
        }
    
    })
  };