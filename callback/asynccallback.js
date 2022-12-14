var fs=require("fs");
fs.readFile("input.txt",function(err,data){
    if (err) throw err;
    console.log(data.toString());
});
console.log("End of program!");