// After installing json-2-csv pakage from npm
const converter = require("json-2-csv");
const todos = [
    { id: 1, name: 'Shadow'},
    { id: 2, name: "Ceasar"},
    { id: 3, name: "Brutus"},
    { id: 4, name: "Julliee"},
]

converter.json2csv(todos, (err,csv)=>{
    if (err) throw err;
    console.log(csv);
});