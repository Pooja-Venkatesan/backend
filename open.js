var fs = require('fs');
fs.readFile('inputfile.txt', function(err, data) {
if( !err )
fs.writeFile('writeMe.txt', data, (err)=>{
    if(err ) throw err;
    });
else
throw err;
});
