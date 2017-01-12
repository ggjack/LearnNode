var mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name : String,
    age: Number,
    temperament: String
});

//Allows to use methods like new, save, creeate, and find
var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});


//adding a new cat to the DB
george.save(function(err,cat){
    if(err){
        console.log("Something Went Wrong!");
    }else{
        console.log("We Just Saved A Cat To The DB!");
        console.log(cat);
    }
});


Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err,cat){
    if(err){
        console.log("Could not create cat :(");
        console.log("err");
    }else{
        console.log("Cat created and stored");
        console.log(cat);
    } 
});

//retrieve all cats from teh DB and cosole.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh No, Error!");
        console.log(err);
    }else{
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});