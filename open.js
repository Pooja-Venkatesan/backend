var fs=require('fs');
fs.readFile("input.txt",function(err,data){
    if (!err)
    fs.writeFile("newfile.txt",data,(err)=>{
        if (err) throw err;
        console.log("DONE");
    });
    else throw err;
});