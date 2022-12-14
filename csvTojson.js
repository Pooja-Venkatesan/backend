const csvTojson = require("csvtojson");
// install csvtojson package from npm
// create a user.csv file.
csvTojson()
.fromFile('user.csv')
.then(users=>{
    console.log(users);
})
.catch(err=>{
    console.log(err);
});