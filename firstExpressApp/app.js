var express = require("express");
var app= express();
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

//allows access to the public directory, in this case for css files
app.use(express.static(__dirname + "/public"));

var names= [];

// tells program that render view will be ejs file
app.set("view engine", "ejs");

// "/" Hi
app.get("/",function(req,res){
   // res.send("Hi There!");
   res.render("some", {names : names});
});

// Post request to add name
app.post("/name", function(req,res){
   names.push(req.body.newName);
   res.redirect("/");
});
// "/bye" Goodbye
app.get("/bye", function(req,res){
   res.send("Goodbye!!"); 
});
// "/dog" MEOW
app.get("/dog", function(req,res){
   res.send("MEOW!!"); 
});

app.get("/r/:subReddit", function(req,res){
   var reddit = req.params.subReddit;
   res.render("reddit", {subReddit: reddit})
   // res.send("WELCOME TO THE " + req.params.subReddit.toUpperCase() + " SUBREDDIT!!!");
});

app.get("*", function (req, res){
   res.send("YOU ARE A STAR!!!");
});
//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});