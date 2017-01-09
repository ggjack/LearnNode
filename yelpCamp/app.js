var express = require("express");
var app= express();
var bodyParser= require("body-parser");
var campgrounds = [];


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    //res.send("This is just a placeholder"); 
    
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res){
    // get data from form and add to campgrounds array
    //redirect back to the campgrounds page
    
    var name = req.body.name;
    var image = req.body.image;
    var newCampground= {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campground page
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Has Started"); 
    
});