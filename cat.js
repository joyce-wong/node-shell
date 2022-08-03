const fs = require('fs');
module.exports = function () {
    // pwd code
    process.stdout.write('prompt > ');
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim().split(' ')[0];
        const fileName = data.toString().trim().split(' ')[1];
        
        // process.stdout.write('You typed: ' + cmd);
        if(cmd === 'cat'){
            process.stdout.write(fs.readFile(fileName, 'utf8', function(err, data)
            {
      
                // Display the file content
                console.log(data);
            });));
            //FIX
        }
        process.stdout.write('\nprompt > ');
    })
  };