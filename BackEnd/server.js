var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection with username and password.
var mongoDB = 'mongodb://mark:gmit1234@ds051577.mlab.com:51577/livescores';
mongoose.connect(mongoDB);

//Define a schema
var Schema = mongoose.Schema;

//instantiate the varaiables
var SomeModelSchema = new Schema({
    fullname: String,
    city: String,
    country: String,
    telephone: String,
    email: String,
    message: String,
});
var DetailModel=mongoose.model('SomeModel', SomeModelSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS") 
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//pass up information to the database
app.post('/api/details', function(req, res){
    DetailModel;
    DetailModel.create({ 
        fullname: req.body.fullname,
        city: req.body.city,
        country: req.body.country,
        telephone: req.body.telephone,
        email: req.body.email,
        message: req.body.message,
      });
     res.status(201).json({message:"message Succesfully Added"}); 
})

//GeT or read information from the database
app.get('/api/details', function(req, res){
    DetailModel.find(function(err,data){
        if(err) console.log("error");
        res.json(data);
        //console.log("data");
    });
})

      //Delete information from the database
      app.delete('/api/details/:id', function(req,res){ 
         // console.log(req.params.id);
          DetailModel.deleteOne({ _id: req.params.id }, 
            function (err) {
                res.json({message:"message Succesfully deleted"}); 
            }); })

 //get information form the database
 app.get('/api/details/:id', function(req,res){ 
    DetailModel.find({ _id: req.params.id}, 
        function (err, data) { 
            if (err) return handleError(err); 
            res.json(data); 
        }); 
    });
    
    //put information to the database
    app.put('/api/details/:id', function(req,res){ 
        DetailModel.findByIdAndUpdate(req.params.id, req.body, function (err, detail) { 
            if (err) return next(err);
            res.status(201).json({message:"message Succesfully Added"}); 
            }); 
        });

   var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   app.use("/", express.static(path.join(__dirname, "angular")));
   app.get('/', function(req, res){ res.sendFile(path.join(__dirname, "angular", "index.html")); })
  // console.log("Example app listening at http://%s:%s", host, port)
})