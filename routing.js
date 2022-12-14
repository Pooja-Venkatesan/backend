// install express
var express = require("express");
var fs = require("fs");
var app=express();

app.get('/',function(req,res){
    res.send("Welcome");
});

app.get('/about',function(req,res){
    res.send("This is about page");
});

app.get('/contact',function(req,res){
    res.send("Contact us");
});

app.listen(8080,function(){
    console.log("Server started");
});