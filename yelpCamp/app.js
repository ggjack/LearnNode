var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image : "https://ladyisaglamp.files.wordpress.com/2014/07/iphone-download-2014-07-27-069-e1406507217572.jpg",
//     description: "This is a huge granite hill, no bathrooms, no water, and beautiful granite!"
// },function(err,campground){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Newly created Campground!");
//         console.log(campground);
//     }
// });


app.get("/", function(req,res){
    //res.send("This is just a placeholder"); 
    
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    //Get all campground from DB
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req,res){
    // get data from form and add to campgrounds array
    //redirect back to the campgrounds page
    
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground= {name: name, image: image, description: desc};
    //Create a new Campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
    //redirect back to campground page
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    //find campground with provided  ID
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
        } else{
            res.render("show", {campground : foundCampground});     
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Has Started"); 
    
});