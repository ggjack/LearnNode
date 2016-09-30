var express = require("express");
var app= express();

// "/" Hi
app.get("/",function(req,res){
   // res.send("Hi There!"); 
   res.render("some.ejs");
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
   res.render("reddit.ejs", {subReddit: reddit})
   // res.send("WELCOME TO THE " + req.params.subReddit.toUpperCase() + " SUBREDDIT!!!");
})

app.get("*", function (req, res){
   res.send("YOU ARE A STAR!!!");
})
//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});