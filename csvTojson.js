const CSVToJSON = require('csvtojson')
CSVToJSON()
 .fromFile('user.csv')
 .then(users => {
 console.log(users)
 })
 .catch(err => {
 console.log(err)
 })
