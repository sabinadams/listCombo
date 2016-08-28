var fs = require('fs'),
    readline = require('readline');

//Write Stream
var writeStream = fs.createWriteStream('result.txt', {'flags': 'a'});

//Line-by-line Read Stream
var rd = readline.createInterface({
    input: fs.createReadStream('list.txt'),
    output: process.stdout,
    terminal: false
});

//Function that fires each time a line is read
rd.on('line', function(line) {

    var output = line.substring(line.indexOf(":") + 1, line.length);

    output += (line.substring(0, line.indexOf(":")).toLowerCase() == "password") ? '\n' :':';

   	writeStream.write(output);

});




